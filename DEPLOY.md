# Deploy AXE.F Capital site to GitHub Pages

Your site will be available at:

**https://\<your-username\>.github.io/axe-f-capital**

The path uses the repo name `axe-f-capital` (short for AXE.F Capital Pty Ltd).

---

## Step 1: Create a GitHub account (if you don’t have one)

1. Go to [github.com](https://github.com) and sign up.
2. Verify your email if asked.

---

## Step 2: Create a new repository

1. Click the **+** in the top-right and choose **New repository**.
2. Set:
   - **Repository name:** `axe-f-capital`  
     (This gives you the URL `username.github.io/axe-f-capital`.)
   - **Visibility:** Public.
   - **Do not** add a README, .gitignore, or license (the project already has files).
3. Click **Create repository**.

---

## Step 3: Turn on GitHub Pages and set source

1. In the new repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source:** select **GitHub Actions**.
3. Leave the rest as default. You don’t need to create a branch or choose a theme.

---

## Step 4: Push your project from your computer

Open a terminal and run these commands (replace `YOUR_USERNAME` with your GitHub username).

```bash
cd /Users/jie/grocery-store

# Initialize Git (if not already)
git init

# (A .gitignore is already in the project with node_modules and dist.)

# Stage all files
git add .

# First commit
git commit -m "Initial commit: AXE.F Capital grocery site"

# Rename branch to main if needed
git branch -M main

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/axe-f-capital.git

# Push (this will trigger the deploy workflow)
git push -u origin main
```

When asked, sign in to GitHub (browser or token).

---

## Step 5: Run the deployment workflow

1. In the repo, open the **Actions** tab.
2. You should see the workflow **“Deploy to GitHub Pages”** running (or already completed).
3. Wait until it shows a green tick.

---

## Step 6: Open your site

1. Go to **Settings** → **Pages** again.
2. At the top you’ll see: **“Your site is live at https://YOUR_USERNAME.github.io/axe-f-capital/”**
3. Open that URL in your browser.

The first deploy can take 1–2 minutes. If you see a 404, wait a bit and refresh.

---

## Updating the site

After you change the code:

```bash
cd /Users/jie/grocery-store
git add .
git commit -m "Describe your changes"
git push
```

Pushing to `main` runs the workflow again and updates the live site in a minute or two.

---

## Using a different repo name

If you create a repo with another name (e.g. `grocery-store`):

1. In the repo, the site URL will be:  
   `https://YOUR_USERNAME.github.io/grocery-store/`
2. In your project, open `vite.config.js` and change:
   - `base: '/axe-f-capital/'` → `base: '/grocery-store/'`  
   (use the same name as the repo, with slashes).
3. Commit and push so the next deploy uses the new base path.

---

## Buying and using your own domain

### Step 1: Choose and buy a domain

**Good names for AXE.F Capital (Australian business):**

- **axe-f-capital.com.au** – .com.au is standard for Australian companies (requires ABN).
- **axefcapital.com.au** – Shorter, no hyphen.
- **axe-f-capital.com** – Global; no ABN needed.

**Where to buy (Australia-friendly):**

| Registrar | Notes | Rough price (first year) |
|-----------|--------|---------------------------|
| [VentraIP](https://www.ventraip.com.au) | Australian, .com.au | ~AU$15–25 |
| [Crazy Domains](https://www.crazydomains.com.au) | .com.au, .com | ~AU$15–35 |
| [GoDaddy](https://www.godaddy.com) | .com, .com.au | ~AU$15–30 |
| [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) | At-cost pricing, no markup | ~US$10–15 for .com |
| [Namecheap](https://www.namecheap.com) | .com, many TLDs | ~US$10–15 |

**For .com.au:** You’ll need your ABN (22 639 805 511) and often an Australian contact. The registrar will ask for this when you register.

**Steps at any registrar:**

1. Search for the name you want (e.g. `axe-f-capital.com.au`).
2. Add it to cart and complete checkout (create an account if needed).
3. After purchase, open the **DNS** or **Domain management** section for that domain—you’ll use it when connecting to GitHub.

---

### Step 2: Use the domain with GitHub Pages

After the domain is yours:

1. **Use the root of your domain (e.g. www.axefcapital.com.au):**  
   In `vite.config.js` change:
   ```js
   base: '/axe-f-capital/',
   ```
   to:
   ```js
   base: '/',
   ```
   Commit and push so the next build uses the root.

2. **Tell GitHub your domain:**  
   Repo → **Settings** → **Pages** → **Custom domain**.  
   Enter your domain (e.g. `www.axe-f-capital.com.au` or `axefcapital.com.au`) and save.

3. **Add a CNAME file in the project** so GitHub keeps the custom domain set:
   - Create `public/CNAME` (no extension).
   - Put one line in it: your domain, e.g. `www.axe-f-capital.com.au`.
   - Commit and push.

4. **Set DNS at your registrar:**  
   GitHub will show the records you need (under **Settings** → **Pages** → **Custom domain**). Usually:
   - **For www (e.g. www.axe-f-capital.com.au):** Add a CNAME record:  
     Name: `www` (or `www.axe-f-capital.com.au` depending on the registrar).  
     Value: `YOUR_USERNAME.github.io`
   - **For apex/naked (e.g. axe-f-capital.com.au):** Add the A records GitHub shows (e.g. four IPs). Some registrars also support ALIAS/ANAME so the apex points to GitHub.

5. Wait 5–60 minutes for DNS to update. In **Settings** → **Pages**, GitHub will show when the domain is verified (green tick).

Your site will then be live at your own domain. The free URL `https://YOUR_USERNAME.github.io/axe-f-capital` will stop working correctly once you switch to `base: '/'` (which is normal when you use a custom domain).
