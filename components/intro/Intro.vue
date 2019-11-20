<template>
  <div id="intro-container">
    
    <IntroAnimation />

    
  <div class=above_intro_text> 
     <h3>A concentration of shareholder power</h3>  
      <p>As indirect shareholders of the companies in funds, index fund investors rely on the funds’ asset managers to cast their vote (“proxy”). The largest three managers – Blackrock, Vanguard, and State Street – vote about 20% of the shares in most large companies, most of these shares are in passive index funds. And in reality, their voting power is even higher as participation from <i class="qtip tip-top" data-tip="Individuals, non-professional investors who generally invest way smaller amounts than larger, institutional investors. Retail investors represent about 30% in public stock ownership."> retail investors</i> in shareholder voting is only 28% <a href="https://corpgov.law.harvard.edu/2019/10/28/2019-proxy-season-review/" target="_blank">&#9758;</a>.</p>
      <p>That concentration of shareholder power sparked a debate over the influence of the world’s largest asset managers. The involvement of asset managers with the companies in their funds affects thousands of companies, the economy and society more broadly.</p> <p>Yet, the point of index investing is a passive approach to investments. Less work means less costs. Once an index fund is launched, asset managers pay license fees to <i class="qtip tip-top" data-tip="Index providers create lists ('indices') in stocks and other asset class indices. They classify and define “markets” and sub-markets: an index provides a benchmark of performance for that market or sector. A well-known example is S&amp;P Dow Jones Indices, that has the S&amp;P 500 index."> index providers</i>. But fund managers incur minimal costs on optimizing the fund portfolio or the specifics of respective <i class="qtip tip-bottom" data-tip="Securities is the broader term that is used to refer to equity and debt (also called fixed income). Stocks (or shares) refers to equity, which represents ownership in a company."> securities</i>. The portfolio of an index fund consists of the securities in an index. This passive investment approach contrasts with the requirement for funds to vote their proxies on shareholder meetings. The largest asset managers are voting on hundreds of thousands of resolutions put to vote at shareholder meetings for companies all over the world.</p>
      <br>
      <h3>Engaged shareholders</h3>
      <p>Over the past years, index fund managers have been scrutinized for underinvest ing in governance and voting policies: they would too often vote <i class="qtip tip-top" data-tip="In our data, funds disclose how they voted: which is mostly “for” or “against” a proposal. Proposals brought by management are - not surprisingly - always supported by management: they recommend shareholders to vote “for”. Almost always, management recommends to vote  against  shareholder proposals."> with management</i>  or fully outsource their decision-forming to a small selection of proxy advisors.</p>
      
      <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox">
        <label for="collapsible" class="lbl-toggle">Proxy advisors?</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <p>
                Proxy advisors consult to investors about how to vote on the range of matters that require shareholder approval at the public corporations in an investor portfolio. ISS and Glass Lewis are the two dominant proxy advisory firms. A concern about proxy advisors is that many institutional investors (like asset managers) essentially delegate their voting decisions to these two advisors. <a href="https://accfcorpgov.org/wp-content/uploads/ACCF-RoboVoting-Report_11_8_FINAL.pdf" target="_blank">  &#9758;   </a> <br> This is less of a concern for the largest asset managers, which have a special “stewardship” department to engage with portfolio companies and direct funds’ votes.
              </p>
            </div>
          </div>
        </div> <!-- end div collapse -->
        
   </div>  <!-- end div of flex container -->

  
  </div>
</template>

<script>
import IntroAnimation from "~/components/intro/IntroAnimation.vue";

export default {
  components: { 
    IntroAnimation 
    }
};
</script>

<style lang="scss" scoped></style>
