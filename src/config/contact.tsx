export const businessHours = [
  { day: "Monday - Friday", hours: "10am - 6pm" },
  { day: "Saturday", hours: "10am - 4pm" },
  { day: "Sunday", hours: "Closed" }
];
export const contactInfo = [
  {
    title: "Email",
    value: "ordinateursociety@hrc.du.ac.in",
    label: ""
  },
  {
    title: "Phone",
    value: "+91 (123) 456-7890",
    get label() {
      const weekday = (typeof businessHours !== 'undefined' && businessHours[0]) ? businessHours[0] : { day: '', hours: '' };
      return `Available ${weekday.day}, ${weekday.hours} IST`;
    }
  },
  {
    title: "Location",
    value: "Delhi, India",
    label: "Find us at our office or online"
  }
];

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/ordinateur.hrc", color: "hover:text-rose-400" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/ordinateur-hrc", color: "hover:text-blue-400" }
];

export const quickLinks = [
  { label: "Departments", href: "/departments" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bitwise", href: "/bitwise" }
];
