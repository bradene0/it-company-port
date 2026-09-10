import { Cloud, Headphones, Network, ShieldCheck, DatabaseBackup, Laptop } from "lucide-react";

export const services = [
  { title: "Managed IT Support", description: "Remote and on-site help for employee devices, business applications, printers, accounts, and day-to-day IT issues.", icon: Headphones },
  { title: "Cybersecurity", description: "MFA, endpoint protection, email security, account policies, security awareness, and basic incident response planning.", icon: ShieldCheck },
  { title: "Microsoft 365", description: "Microsoft 365 administration, user setup, Exchange Online, Teams, SharePoint, licensing, and tenant cleanup.", icon: Cloud },
  { title: "Networks & Wi-Fi", description: "Business firewalls, switches, wireless access points, guest networks, VPN access, and connectivity troubleshooting.", icon: Network },
  { title: "Backup & Recovery", description: "Managed backups for servers, Microsoft 365 data, and workstations with restore checks and retention planning.", icon: DatabaseBackup },
  { title: "Computer Management", description: "Device setup, patching, encryption, antivirus, software deployment, inventory, onboarding, and offboarding.", icon: Laptop }
];
