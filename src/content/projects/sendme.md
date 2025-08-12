---
dataId: '1'
title: 'Sendme - Online sales page integrated with Amazon API'
description: 'Created from scratch, using React and Tailwind CSS, Integrated with a backend based on Node JS and SQLite'
mockup: '/images/sendme/sendme-mockup.avif'
shortCuts: 
    Frontend: 
        - React 
        - Zustand
        - Javascript
    Backend:
        - Node js
        - Express js
        - SQLite
        - Real Time Amazon Data by OpenWeb Ninja
    Deployment:
        - Vercel
        - Turso SQLite
    Preview: 
        - ['Home-page', '/images/sendme/sendme-homepage.avif']
        - ['Search-page', '/images/sendme/sendme-search.avif']
        - ['Product-page', '/images/sendme/sendme-product.avif']
        - ['Cart-page', '/images/sendme/sendme-cart.avif']
        - ['Purchase-page', '/images/sendme/sendme-purchase.avif']
        - ['Profile-page', '/images/sendme/sendme-profile.avif']
    Resources: 
        - [Repository, 'https://github.com/faOC20/sendme-front-react']
        - [Website, 'https://sendme-rho.vercel.app/']
        - [Project details, '/project/sendme']
---


<h1 class='text-2xl 2xl:text-5xl'> Sendme - Online sales page</h1>

<strong id='introduction' class='text-xl'> Introduction </strong>

Sendme is a web-based information system developed to modernize the administrative operations of Milenium Manía C.A., a Venezuelan company specializing in international product shipments. The system was created in response to the growing demand for reliable e-commerce solutions in regions with limited access to global marketplaces.

Operating from Cumaná, Sucre State, Sendme faced challenges such as manual order processing, fragmented communication channels, and data loss due to Excel-based tracking. This project aimed to centralize operations, automate workflows, and enhance customer trust through a robust, scalable web application.

Application Structure Sendme is composed of six core modules, each designed to address a specific operational need:
- User Management – Handles registration, login, and profile updates.
- Product Selection – Connects to Amazon’s API for real-time product browsing and selection.
- Order Processing – Manages order creation, payment validation, and invoice generation.
- Administrative Dashboard – Allows staff to monitor orders, update statuses, and manage customer interactions.
- System Maintenance – Provides tools for technical support and system upkeep.
- Reporting and Validation – Includes black-box testing and integration checks for system reliability.

Development began in early 2024 using UML modeling and the Rational Unified Process (RUP) methodology. The system was designed to meet both functional and non-functional requirements, ensuring performance, security, and usability.

<strong id='Frontend' class='text-xl'> Frontend technologies and tools </strong>

- Figma
- React
- JavaScript
- Zustand
- Astro

The user interface was crafted in Figma to ensure clarity and responsiveness. Key features include:

- A modular navigation bar for seamless transitions between pages.
- A homepage with real-time product search, cart management, and order creation.
- A dynamic product view with options to add, remove, or modify items.
- A payment interface that validates user data and confirms transactions.
- Responsive design principles for compatibility across devices.

React was chosen as the core library for its reactive components capabilities. Combined Zustand, it delivers a fluid user experience and efficient state management.

<strong id='Backend' class='text-xl'> Backend technologies </strong>

- Node.js
- Express
- SQLite
- Turso
- Real-time Amazon API (via OpenWeb Ninja)

The backend follows a modular architecture using Node.js and Express. It connects to Amazon’s API for product data and uses SQLite for relational data storage, deployed via Turso for production scalability. Middleware functions ensure data validation and secure API interactions.

| Relationship                           | Type                     |
|----------------------------------------|--------------------------|
| Pedido → Usuario                       | Many to One              |
| Pedido → Direccion                     | Many to One              |
| Pedido → Telefono                      | Many to One              |
| Pedido → Estado                        | Many to One              |
| Producto → Pedido                      | Many to One              |
| Direccion → Ciudad                     | Many to One              |
| Direccion → Usuario                    | Many to One              |
| Direccion → Municipio                  | Many to One              |
| Municipio → Ciudad                     | Many to One              |
| Telefono → Usuario                     | Many to One              |

<a href='https://dbdiagram.io/d/sendme-688e3d01cca18e685cf30925' target='__blank' class='text-theme-primary-blue'>Click to see detailed database</a>


<strong id='Deployment' class='text-xl'> Cloud deployment technologies </strong>

- Vercel
- Firebase 
- Turso
- DB Browser for SQLite

Sendme was deployed in Vercel until its release. Turso was selected for its lightweight edge database capabilities, allowing fast, distributed access to SQLite instances. This setup ensures high availability and performance across regions.



<strong id='Preview' class='text-xl'>
    System Page Overview
</strong>

This application is structured around a set of functional pages, each designed to streamline operations and provide full administrative control. From real-time dashboards to financial reconciliation tools, every section plays a key role in maintaining transparency, efficiency, and traceability throughout the client lifecycle. Below is a breakdown of the system’s core pages and their respective roles.

<div id="Home-page">
</div>

![Sendme web, main page screenshot](/images/sendme/sendme-homepage.avif)
> Sendme web - Main page.

<div id="Search-page">
</div>

![Sendme web, search page screenshot](/images/sendme/sendme-search.avif)
> Sendme web - Search page.



<div id="Product-page">
</div>

![Sendme web, product page screenshot](/images/sendme/sendme-product.avif)
> Sendme web - Product page.



<div id="Cart-page">
</div>

![Sendme web, cart page screenshot](/images/sendme/sendme-cart.avif)
> Sendme web - Cart page.

<div id="Purchase-page">
</div>

![Sendme web, Purchase page screenshot](/images/sendme/sendme-purchase.avif)
> Sendme web - Purchase page.

<div id="Profile-page">
</div>

![Sendme web, Profile page screenshot](/images/sendme/sendme-profile.avif)
> Sendme web - Profile page.





