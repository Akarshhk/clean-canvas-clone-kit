import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ member, isOpen, onClose }: TeamModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div
            className="flex flex-col items-center text-center space-y-4"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="relative">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-40 h-48 rounded-lg object-cover mx-auto shadow-lg"
                itemProp="image"
              />
            </div>
            <div>
              <DialogTitle
                className="text-2xl font-bold text-primary mb-2"
                itemProp="name"
              >
                {member.name}
              </DialogTitle>
              <Badge
                variant="secondary"
                className="text-sm"
                itemProp="jobTitle"
              >
                {member.position}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-6 space-y-4">
          <p
            className="text-foreground/80 leading-relaxed text-center"
            itemProp="description"
          >
            {member.description}
          </p>
          
          {member.linkedin && (
            <div className="flex justify-center pt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                itemProp="sameAs"
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;
