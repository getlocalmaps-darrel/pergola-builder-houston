
HOW TO DEPLOY THIS SITE

1. GitHub
   - Go to https://github.com/new
   - Repo name: pergola-builder-houston
   - Click "Create repository"
   - Click "uploading an existing file"
   - Drag ALL the files from this folder (including the assets folder) into GitHub
   - Click "Commit changes"

2. Vercel
   - Go to Vercel dashboard
   - Add New → Project
   - Import from GitHub → choose pergola-builder-houston
   - Deploy
   - Done. This is static HTML, so no build step is needed.

3. Domain
   - In Vercel → Project Settings → Domains
   - Add pergolabuilderhouston.com
   - Copy DNS records into your domain provider (GoDaddy / Namecheap)

4. Form leads
   - Go to https://formspree.io and make a form that emails leads to chavezdarrel@yahoo.com
   - Replace the action URL in the <form> tag in index.html and contact.html
   - Commit to GitHub again. Vercel auto-updates.

5. Analytics
   - Go to https://analytics.google.com (log in with getlocalmaps@gmail.com)
   - Create GA4 property, get Measurement ID (G-XXXXXXX)
   - Replace G-XXXXXXXXXX in the <script> tag in all pages
   - Commit to GitHub to publish.
