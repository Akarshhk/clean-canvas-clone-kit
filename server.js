import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Create http server
const app = express();

// Add compression middleware
app.use(compression());

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  });
  app.use(vite.middlewares);
} else {
  app.use(base, serveStatic(path.resolve(__dirname, 'dist/client'), {
    index: false
  }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url);
    
    // Generate SEO meta tags based on route
    const seoMeta = generateSEOMeta(url);
    
    const html = template
      .replace(`<!--ssr-outlet-->`, rendered.html)
      .replace(`<!--ssr-head-->`, seoMeta);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Generate SEO meta tags based on route
function generateSEOMeta(url) {
  const baseTitle = 'AccountsWhiz - Strategic Financial Services for Growth';
  const baseDescription = 'Professional accounting, payroll, tax, compliance, and advisory services for startups, SMEs, and cross-border businesses. 80+ years of collective experience.';
  
  // Route-specific SEO
  const routes = {
    '/': {
      title: baseTitle,
      description: baseDescription,
      type: 'website'
    },
    '/about': {
      title: 'About Us - AccountsWhiz | Expert Financial Team',
      description: 'Meet our experienced team of financial professionals. 80+ years of collective expertise in accounting, tax, and business advisory services.',
      type: 'website'
    },
    '/us-services': {
      title: 'US Financial Services - AccountsWhiz | US Tax & Accounting',
      description: 'Comprehensive US financial services including tax preparation, accounting, payroll, and compliance for businesses operating in the United States.',
      type: 'website'
    },
    '/india-services': {
      title: 'India Financial Services - AccountsWhiz | Indian Tax & Compliance',
      description: 'Expert Indian financial services including GST compliance, income tax, accounting, and business advisory for Indian businesses and startups.',
      type: 'website'
    }
  };

  const routeData = routes[url] || routes['/'];
  
  return `
    <title>${routeData.title}</title>
    <meta name="description" content="${routeData.description}" />
    <meta property="og:title" content="${routeData.title}" />
    <meta property="og:description" content="${routeData.description}" />
    <meta property="og:type" content="${routeData.type}" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${routeData.title}" />
    <meta name="twitter:description" content="${routeData.description}" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    
    <!-- Structured Data for Business -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "AccountsWhiz",
      "url": "https://accountswhiz.com",
      "logo": "https://accountswhiz.com/lovable-uploads/c48e9ea5-a9a7-4a89-b4ae-d177979fb60e.png",
      "description": "${baseDescription}",
      "serviceType": "Accounting and Financial Services",
      "areaServed": ["India", "United States"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Accounting Services",
              "description": "Professional bookkeeping and accounting services"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Tax Services",
              "description": "Tax preparation and planning services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Payroll Services",
              "description": "Complete payroll management solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Advisory",
              "description": "Strategic business consulting and advisory services"
            }
          }
        ]
      }
    }
    </script>
  `;
}

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});