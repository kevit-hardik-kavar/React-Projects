import React from "react";
import table from "./table.svg";
import "./Main.css";

function Main() {
  return (
    <div className="main-content">
      <button>Version 2.2.0</button>
      <p className="header">Introduction</p>
      <div className="inner-paragraph">
        <p>
          ⚡Docusaurus will help you ship a{" "}
          <span className="bold">beautiful documentation site in no time.</span>
        </p>
        <p>
          💸 Building a custom tech stack is expensive. Instead,{" "}
          <span className="bold">focus on your content</span> and just write
          Markdown files.
        </p>
        <p>
          💥Ready for more? Use <span className="bold">advanced features</span>{" "}
          like versioning, i18n, search and theme customizations.
        </p>
        <p>
          💅 Check the <span className="green">best Docusaurus sites</span> for
          inspiration and read some
          <span className="green">testimonials</span>.
        </p>
        <p>
          🧐 Docusaurus is a <span className="bold">static-site generator</span>
          . It builds a <span className="bold">single-page application</span>
          with fast client-side navigation, leveraging the full power of{" "}
          <span className="bold">React</span> to make your site interactive. It
          provides out-of-the-box
          <span className="bold">documentation features</span> but can be used
          to create <span className="bold">any kind of site </span>(personal
          website, product, blog, marketing landing pages, etc).
        </p>
      </div>
      <div className="img">
        <img src={table} alt="" />
      </div>
      <p className="header">Fast Track ⏱️</p>
      <div className="inner-paragraph">
        <p>
          Understand Docusaurus in <span className="bold">5 minutes</span> by
          playing!
        </p>
        <p>
          Create a new Docusaurus site and follow the very short embedded
          tutorial.
        </p>
        <p>
          Install <span className="green">Node.js</span> and create a new
          Docusaurus site:
        </p>
        <p className="npx-link">
          npx create-docusaurus@latest my-website classic
        </p>
        <p>Start the site:</p>
        <div className="npx-link">
          <p>cd my-website</p>
          <p>npx docusaurus start</p>
        </div>
        <p>
          Open <a href="/">http://localhost:3000</a> and follow the tutorial.
        </p>
        <div className="npx-link">
          <p>
            💡<span className="green"> TIP</span>
          </p>
          <p>
            Use <span className="green">docusaurus.new</span> to test Docusaurus
            immediately in your browser!
          </p>
          <p>
            Or read the <span className="green">5-minute tutorial</span> online.
          </p>
        </div>
      </div>
      <p className="header">Docusaurus: Documentation Made Easy</p>
      <p>
        In this presentation at{" "}
        <span className="green">Algolia Community Event</span>,{" "}
        <span className="green">Meta Open Source team</span> shared a brief
        walk-through of Docusaurus. They covered how to get started with the
        project, enable plugins, and set up functionalities like documentation
        and blogging.
      </p>
      <div className="ratio">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yhyx7otSksg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="header">Migrating from v1</p>
      <p>
        Docusaurus v2 has been a total rewrite from Docusaurus v1, taking
        advantage of a completely modernized toolchain. After v2's official
        release, we highly encourage you to{" "}
        <span className="bold">use Docusaurus v2 over Docusaurus v1</span>, as
        Docusaurus v1 has been deprecated.
      </p>
      <p>
        A <span className="green">lot of users</span> are already using
        Docusaurus v2 (<span className="green">trends</span>).
      </p>
      <p className="bold midium">Use Docusaurus v2 if:</p>
      <ul className="list">
        <li>✅ You want a modern Jamstack documentation site</li>
        <li>
          ✅ You want a single-page application (SPA) with client-side routing
        </li>
        <li>✅ You want the full power of React and MDX</li>
        <li>✅ You do not need support for IE11</li>
      </ul>
      <p className="bold midium">
        Use <span className="green">Docusaurus v1</span> if:
      </p>
      <ul className="list">
        <li>❌ You don't want a single-page application (SPA)</li>
        <li>
          ❌ You need support for IE11 (...do you? IE has already reached
          end-of-life and is no longer officially supported)
        </li>
      </ul>
      <p>
        For existing v1 users that are seeking to upgrade to v2, you can follow
        our migration guide.
      </p>
      <p className="header">Feature</p>
      <p>
        Docusaurus is built with high attention to the developer and contributor
        experience.
      </p>
      <p className="bold midium">&#x2022;⚛️ Built with 💚 and React:</p>
      <p className="extra-margin">Extend and customize with React</p>
      <p className="extra-margin">
        Gain full control of your site's browsing experience by providing your
        own React components
      </p>
      <p className="bold midium">&#x2022;Pluggable:</p>
      <p className="extra-margin">
        Bootstrap your site with a basic template, then use advanced features
        and plugins
      </p>
      <p className="extra-margin">
        Open source your plugins to share with the community
      </p>
      <p className="bold midium">&#x2022;✂️ Developer experience:</p>
      <p className="extra-margin">Start writing your docs right now</p>
      <p className="extra-margin">
        Universal configuration entry point to make it more maintainable by
        contributors
      </p>
      <p className="extra-margin">
        Hot reloading with lightning-fast incremental build on changes
      </p>
      <p className="extra-margin">Route-based code and data splitting</p>
      <p className="extra-margin">
        Publish to GitHub Pages, Netlify, Vercel, and other deployment services
        with ease
      </p>
      <p>
        Our shared goal—to help your users quickly find what they need and
        understand your products better. We share our best practices to help you
        build your docs site right and well.
      </p>
      <p className="bold midium">&#x2022;🎯 SEO friendly:</p>
      <p className="extra-margin">
        HTML files are statically generated for every possible path.
      </p>
      <p className="extra-margin">
        Page-specific SEO to help your users land on your official docs directly
        relating their problems at hand.
      </p>
      <p className="bold midium">&#x2022;📝 Powered by MDX</p>
      <p className="extra-margin">
        Write interactive components via JSX and React embedded in Markdown.
      </p>
      <p className="extra-margin">
        Share your code in live editors to get your users to love your products
        on the spot.
      </p>
      <p className="midium">
        &#x2022;🔍 <span className="bold">Search:</span>
        Your full site is searchable.
      </p>
      <p className="midium">
        &#x2022;💾 <span className="bold">Document Versioning</span>: Helps you
        keep documentation in sync with project releases.
      </p>
      <p className="midium">
        &#x2022;🌍 <span className="bold">Internationalization (i18n)</span>:
        Translate your site in multiple locales.
      </p>
      <p>
        Docusaurus 2 is born to be compassionately accessible to all your users,
        and lightning-fast.
      </p>
      <p className="midium">
        &#x2022;⚡ <span className="bold">Lightning-fast</span>: Docusaurus 2
        follows the PRPL Pattern that makes sure your content loads blazing
        fast.
      </p>
      <p className="midium">
        &#x2022;🦖 <span className="bold">Accessible</span>: Attention to
        accessibility, making your site equally accessible to all users.
      </p>
      <p className="header">Design principles</p>
      <ul className="list">
        <li>
          <span className="bold">Little to learn</span>. Docusaurus should be
          easy to learn and use as the API is quite small. Most things will
          still be achievable by users, even if it takes them more code and more
          time to write. Not having abstractions is better than having the wrong
          abstractions, and we don't want users to have to hack around the wrong
          abstractions. Mandatory talk—Minimal API Surface Area.
        </li>
        <li>
          <span className="bold">Intuitive</span>. Users will not feel
          overwhelmed when looking at the project directory of a Docusaurus
          project or adding new features. It should look intuitive and easy to
          build on top of, using approaches they are familiar with.
        </li>
        <li>
          <span className="bold">Layered architecture</span>. The separations of
          concerns between each layer of our stack (content/theming/styling)
          should be clear—well-abstracted and modular.
        </li>
        <li>
          <span className="bold">Sensible defaults</span>. Common and popular
          performance optimizations and configurations will be done for users
          but they are given the option to override them.
        </li>
        <li>
          <span className="bold">No vendor lock-in</span>. Users are not
          required to use the default plugins or CSS, although they are highly
          encouraged to. Certain core infrastructures like React Loadable and
          React Router cannot be swapped because we do default performance
          optimization on them, but not higher-level ones. Choice of Markdown
          engines, CSS frameworks, CSS methodology, and other architectures will
          be entirely up to users.
        </li>
      </ul>
      <p>
        We believe that, as developers, knowing how a library works helps us
        become better at using it. Hence we're dedicating effort to explaining
        the architecture and various components of Docusaurus with the hope that
        users reading it will gain a deeper understanding of the tool and be
        even more proficient in using it.
      </p>
      <p className="header">Comparison with other tools</p>
      <p>
        Across all static site generators, Docusaurus has a unique focus on
        documentation sites and has many out-of-the-box features.
      </p>
      <p>
        We've also studied other main static site generators and would like to
        share our insights on the comparison, hopefully helping you navigate
        through the prismatic choices out there.
      </p>
      <p className="mini-header">Gatsby</p>
      <p>
        <span className="green-light">Gatsby</span> is packed with a lot of
        features, has a rich ecosystem of plugins, and is capable of doing
        everything that Docusaurus does. Naturally, that comes at a cost of a
        higher learning curve. Gatsby does many things well and is suitable for
        building many types of websites. On the other hand, Docusaurus tries to
        do one thing super well - be the best tool for writing and publishing
        content.
      </p>
      <p>
        GraphQL is also pretty core to Gatsby, although you don't necessarily
        need GraphQL to build a Gatsby site. In most cases when building static
        websites, you won't need the flexibility that GraphQL provides.
      </p>
      <p>
        Many aspects of Docusaurus 2 were inspired by the best things about
        Gatsby and it's a great alternative.
      </p>
      <p>
        <span className="green-light">Docz</span> is a Gatsby theme to build
        documentation websites. It is currently less featured than Docusaurus.
      </p>
      <p className="mini-header">VuePress</p>
      <p>
        <span className="green-light">VuePress</span> has many similarities with
        Docusaurus - both focus heavily on content-centric website and provides
        tailored documentation features out of the box. However, VuePress is
        powered by Vue, while Docusaurus is powered by React. If you want a
        Vue-based solution, VuePress would be a decent choice.
      </p>
      <p className="mini-header">MkDocs</p>
      <p>
        <span className="green-light">MkDocs</span> is a popular Python static
        site generator with value propositions similar to Docusaurus.
      </p>
      <p>
        It is a good option if you don't need a single-page application and
        don't plan to leverage React.
      </p>
      <p>
        <span className="green-light">Material for MkDocs</span> is a beautiful
        theme.
      </p>
      <p className="mini-header">Docsify</p>
      <p>
        <span className="green-light">Docsify</span> makes it easy to create a
        documentation website, but is not a static-site generator and is not SEO
        friendly.
      </p>
      <p className="mini-header">GitBook</p>
      <p>
        <span className="green-light">GitBook</span> has a very clean design and
        has been used by many open source projects. With its focus shifting
        towards a commercial product rather than an open-source tool, many of
        its requirements no longer fit the needs of open source projects'
        documentation sites. As a result, many have turned to other products.
        You may read about Redux's switch to Docusaurus here.
      </p>
      <p>
        Currently, GitBook is only free for open-source and non-profit teams.
        Docusaurus is free for everyone.
      </p>
      <p className="mini-header">Jekyll</p>
      <p>
        Jekyll is one of the most mature static site generators around and has
        been a great tool to use — in fact, before Docusaurus, most of
        Facebook's Open Source websites are/were built on Jekyll! It is
        extremely simple to get started. We want to bring a similar developer
        experience as building a static site with Jekyll.
      </p>
      <p>
        In comparison with statically generated HTML and interactivity added
        using <script /> tags, Docusaurus sites are React apps. Using modern
        JavaScript ecosystem tooling, we hope to set new standards on doc sites'
        performance, asset building pipeline and optimizations, and ease to set
        up.
      </p>
      <p className="header">Staying informed</p>
      <ul className="list list-green">
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Discord</a>
        </li>
      </ul>
      <p className="header">Something missing?</p>
      <p>
        If you find issues with the documentation or have suggestions on how to
        improve the documentation or the project in general, please file an
        issue for us, or send a tweet mentioning the @docusaurus Twitter
        account.
      </p>
      <p>
        For new feature requests, you can create a post on our feature requests
        board (Canny), which is a handy tool for road-mapping and allows for
        sorting by upvotes, which gives the core team a better indicator of what
        features are in high demand, as compared to GitHub issues which are
        harder to triage. Refrain from making a Pull Request for new features
        (especially large ones) as someone might already be working on it or
        will be part of our roadmap. Talk to us first!
      </p>
    </div>
  );
}

export default Main;
