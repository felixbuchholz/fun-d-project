<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div
    id="titles"
    class="current-title"
    :style="`transform: translateX(${title.x}px) translateY(${title.y}px)`"
  >
    <div
      id="financial-future"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      How do people approach their <br />
      <span class="bold">financial future?</span>
    </div>

    <div
      id="passive-growth"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      Alongside the rise of retirement funds <br />
      <span class="bold">passive investment grew</span>
    </div>

    <div
      id="fund-concept"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      An index fund buys securities from a pre-defined selection of companies <br />
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

    <div
      id="fund-concept-two"
      class="left  zero-opacity"
      style="transform: scale(0)"
    >
     based on an existing list - an index. <br />
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

<!-- <div class='sp_list zero-opacity'
      style="transform: scale(0)">
    <tbody >
                            <tr class='sp_list_item zero-opacity'>
                                <td>1&nbsp;&nbsp;</td>
                                <td>Microsoft Corporation</td>
                                <td>MSFT</td>
                                <td>4.355264</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;139.99</td>
                                <td class="text-nowrap" style="color: green">0.31</td>
                                <td class="text-nowrap" style="color: green">(0.22%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>2&nbsp;&nbsp;</td>
                                <td>Apple Inc.</td>
                                <td>AAPL</td>
                                <td>4.008112</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;237.25</td>
                                <td class="text-nowrap" style="color: green">1.04</td>
                                <td class="text-nowrap" style="color: green">(0.44%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>3&nbsp;&nbsp;</td>
                                <td>Amazon.com Inc.</td>
                                <td>AMZN</td>
                                <td>2.931056</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;1,734.49</td>
                                <td class="text-nowrap" style="color: green">2.57</td>
                                <td class="text-nowrap" style="color: green">(0.15%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>4&nbsp;&nbsp;</td>
                                <td>Facebook Inc. Class A</td>
                                <td>FB</td>
                                <td>1.776415</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;184.65</td>
                                <td class="text-nowrap" style="color: green">0.46</td>
                                <td class="text-nowrap" style="color: green">(0.25%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>5&nbsp;&nbsp;</td>
                                <td>">Berkshire Hathaway Inc. Class B</td>
                                <td>">BRK.B</td>
                                <td>1.663716</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;208.60</td>
                                <td class="text-nowrap" style="color: green">0.52</td>
                                <td class="text-nowrap" style="color: green">(0.25%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>6&nbsp;&nbsp;</td>
                                <td>Alphabet Inc. Class C</td>
                                <td>GOOG</td>
                                <td>1.498264</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;1,216.00</td>
                                <td class="text-nowrap" style="color: green">0.55</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>7&nbsp;&nbsp;</td>
                                <td>JPMorgan Chase &amp; Co.</td>
                                <td>JPM</td>
                                <td>1.497862</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;116.23</td>
                                <td class="text-nowrap" style="color: green">0.09</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>8&nbsp;&nbsp;</td>
                                <td>Alphabet Inc. Class A</td>
                                <td>GOOGL</td>
                                <td>1.485925</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;1,217.48</td>
                                <td class="text-nowrap" style="color: green">1.77</td>
                                <td class="text-nowrap" style="color: green">(0.15%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>9&nbsp;&nbsp;</td>
                                <td>Johnson &amp; Johnson</td>
                                <td>JNJ</td>
                                <td>1.397050</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;131.50</td>
                                <td class="text-nowrap" style="color: green">0.17</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>10&nbsp;&nbsp;</td>
                                <td>Procter &amp; Gamble Company</td>
                                <td>PG</td>
                                <td>1.251691</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;121.10</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.01%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>11&nbsp;&nbsp;</td>
                                <td>Visa Inc. Class A</td>
                                <td>V</td>
                                <td>1.238738</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;177.40</td>
                                <td class="text-nowrap" style="color: green">0.34</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>12&nbsp;&nbsp;</td>
                                <td>Exxon Mobil Corporation</td>
                                <td>XOM</td>
                                <td>1.184445</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.09</td>
                                <td class="text-nowrap" style="color: green">0.11</td>
                                <td class="text-nowrap" style="color: green">(0.16%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>13&nbsp;&nbsp;</td>
                                <td>AT&amp;T Inc.</td>
                                <td>T</td>
                                <td>1.121506</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;37.61</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>14&nbsp;&nbsp;</td>
                                <td>Home Depot Inc.</td>
                                <td>HD</td>
                                <td>1.040123</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;234.78</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>15&nbsp;&nbsp;</td>
                                <td>Verizon Communications Inc.</td>
                                <td>VZ</td>
                                <td>1.014982</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;60.05</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.20%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>16&nbsp;&nbsp;</td>
                                <td>Mastercard Incorporated Class A</td>
                                <td>MA</td>
                                <td>1.002702</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;276.04</td>
                                <td class="text-nowrap" style="color: green">0.13</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>17&nbsp;&nbsp;</td>
                                <td>Bank of America Corp</td>
                                <td>BAC</td>
                                <td>0.977585</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.01</td>
                                <td class="text-nowrap" style="color: green">0.10</td>
                                <td class="text-nowrap" style="color: green">(0.35%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>18&nbsp;&nbsp;</td>
                                <td>Walt Disney Company</td>
                                <td>DIS</td>
                                <td>0.955638</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;130.06</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.03%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>19&nbsp;&nbsp;</td>
                                <td>Intel Corporation</td>
                                <td>INTC</td>
                                <td>0.928682</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;52.16</td>
                                <td class="text-nowrap" style="color: green">0.07</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>20&nbsp;&nbsp;</td>
                                <td>Chevron Corporation</td>
                                <td>CVX</td>
                                <td>0.892064</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;116.20</td>
                                <td class="text-nowrap" style="color: green">0.05</td>
                                <td class="text-nowrap" style="color: green">(0.04%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>21&nbsp;&nbsp;</td>
                                <td>Merck &amp; Co. Inc.</td>
                                <td>MRK</td>
                                <td>0.879626</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;84.97</td>
                                <td class="text-nowrap" style="color: green">0.63</td>
                                <td class="text-nowrap" style="color: green">(0.75%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>22&nbsp;&nbsp;</td>
                                <td>UnitedHealth Group Incorporated</td>
                                <td>UNH</td>
                                <td>0.868897</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;222.25</td>
                                <td class="text-nowrap" style="color: green">0.18</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>23&nbsp;&nbsp;</td>
                                <td>Coca-Cola Company</td>
                                <td>KO</td>
                                <td>0.847018</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.45</td>
                                <td class="text-nowrap" style="color: green">0.15</td>
                                <td class="text-nowrap" style="color: green">(0.28%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>24&nbsp;&nbsp;</td>
                                <td>Comcast Corporation Class A</td>
                                <td>CMCSA</td>
                                <td>0.827844</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;45.57</td>
                                <td class="text-nowrap" style="color: green">0.02</td>
                                <td class="text-nowrap" style="color: green">(0.04%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>25&nbsp;&nbsp;</td>
                                <td>Boeing Company</td>
                                <td>BA</td>
                                <td>0.813464</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;374.40</td>
                                <td class="text-nowrap" style="color: red">-0.52</td>
                                <td class="text-nowrap" style="color: red">(-0.14%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>26&nbsp;&nbsp;</td>
                                <td>Pfizer Inc.</td>
                                <td>PFE</td>
                                <td>0.812022</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;36.15</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.11%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>27&nbsp;&nbsp;</td>
                                <td>Cisco Systems Inc.</td>
                                <td>CSCO</td>
                                <td>0.803592</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;46.65</td>
                                <td class="text-nowrap" style="color: green">0.09</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>28&nbsp;&nbsp;</td>
                                <td>Wells Fargo &amp; Company</td>
                                <td>WFC</td>
                                <td>0.800088</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;49.40</td>
                                <td class="text-nowrap" style="color: green">0.19</td>
                                <td class="text-nowrap" style="color: green">(0.39%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>29&nbsp;&nbsp;</td>
                                <td>PepsiCo Inc.</td>
                                <td>PEP</td>
                                <td>0.790463</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;137.87</td>
                                <td class="text-nowrap" style="color: green">0.23</td>
                                <td class="text-nowrap" style="color: green">(0.17%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>30&nbsp;&nbsp;</td>
                                <td>Walmart Inc.</td>
                                <td>WMT</td>
                                <td>0.697695</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;120.47</td>
                                <td class="text-nowrap" style="color: green">0.23</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>31&nbsp;&nbsp;</td>
                                <td>McDonald's Corporation</td>
                                <td>MCD</td>
                                <td>0.659615</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;209.29</td>
                                <td class="text-nowrap" style="color: green">0.27</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>32&nbsp;&nbsp;</td>
                                <td>Citigroup Inc.</td>
                                <td>C</td>
                                <td>0.635823</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;70.26</td>
                                <td class="text-nowrap" style="color: green">0.16</td>
                                <td class="text-nowrap" style="color: green">(0.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>33&nbsp;&nbsp;</td>
                                <td>Medtronic Plc</td>
                                <td>MDT</td>
                                <td>0.591133</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;107.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>34&nbsp;&nbsp;</td>
                                <td>Abbott Laboratories</td>
                                <td>ABT</td>
                                <td>0.580960</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;79.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>35&nbsp;&nbsp;</td>
                                <td>Adobe Inc.</td>
                                <td>ADBE</td>
                                <td>0.547393</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;278.11</td>
                                <td class="text-nowrap" style="color: red">-0.18</td>
                                <td class="text-nowrap" style="color: red">(-0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>36&nbsp;&nbsp;</td>
                                <td>Costco Wholesale Corporation</td>
                                <td>COST</td>
                                <td>0.535989</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;298.07</td>
                                <td class="text-nowrap" style="color: green">0.47</td>
                                <td class="text-nowrap" style="color: green">(0.16%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>37&nbsp;&nbsp;</td>
                                <td>salesforce.com inc.</td>
                                <td>CRM</td>
                                <td>0.526655</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;149.75</td>
                                <td class="text-nowrap" style="color: green">0.38</td>
                                <td class="text-nowrap" style="color: green">(0.25%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>38&nbsp;&nbsp;</td>
                                <td>International Business Machines Corporation</td>
                                <td>IBM</td>
                                <td>0.512796</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;142.95</td>
                                <td class="text-nowrap" style="color: green">0.19</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>39&nbsp;&nbsp;</td>
                                <td>Netflix Inc.</td>
                                <td>NFLX</td>
                                <td>0.503695</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;283.70</td>
                                <td class="text-nowrap" style="color: green">0.77</td>
                                <td class="text-nowrap" style="color: green">(0.27%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>40&nbsp;&nbsp;</td>
                                <td>Oracle Corporation</td>
                                <td>ORCL</td>
                                <td>0.501098</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>41&nbsp;&nbsp;</td>
                                <td>Philip Morris International Inc.</td>
                                <td>PM</td>
                                <td>0.496167</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;77.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>42&nbsp;&nbsp;</td>
                                <td>Texas Instruments Incorporated</td>
                                <td>TXN</td>
                                <td>0.489008</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;130.15</td>
                                <td class="text-nowrap" style="color: green">0.06</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>43&nbsp;&nbsp;</td>
                                <td>Amgen Inc.</td>
                                <td>AMGN</td>
                                <td>0.488700</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;200.80</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>44&nbsp;&nbsp;</td>
                                <td>PayPal Holdings Inc</td>
                                <td>PYPL</td>
                                <td>0.485234</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;102.39</td>
                                <td class="text-nowrap" style="color: green">0.81</td>
                                <td class="text-nowrap" style="color: green">(0.80%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>45&nbsp;&nbsp;</td>
                                <td>Accenture Plc Class A</td>
                                <td>ACN</td>
                                <td>0.479485</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;184.97</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>46&nbsp;&nbsp;</td>
                                <td>NIKE Inc. Class B</td>
                                <td>NKE</td>
                                <td>0.477412</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;94.00</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>47&nbsp;&nbsp;</td>
                                <td>Honeywell International Inc.</td>
                                <td>HON</td>
                                <td>0.475046</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;163.53</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>48&nbsp;&nbsp;</td>
                                <td>NextEra Energy Inc.</td>
                                <td>NEE</td>
                                <td>0.465099</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;230.50</td>
                                <td class="text-nowrap" style="color: green">0.96</td>
                                <td class="text-nowrap" style="color: green">(0.42%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>49&nbsp;&nbsp;</td>
                                <td>Thermo Fisher Scientific Inc.</td>
                                <td>TMO</td>
                                <td>0.461042</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;283.64</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>50&nbsp;&nbsp;</td>
                                <td>NVIDIA Corporation</td>
                                <td>NVDA</td>
                                <td>0.455863</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;186.55</td>
                                <td class="text-nowrap" style="color: green">0.56</td>
                                <td class="text-nowrap" style="color: green">(0.30%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>51&nbsp;&nbsp;</td>
                                <td>AbbVie Inc.</td>
                                <td>ABBV</td>
                                <td>0.450084</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;73.66</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.04%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>52&nbsp;&nbsp;</td>
                                <td>Union Pacific Corporation</td>
                                <td>UNP</td>
                                <td>0.450027</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;161.39</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>53&nbsp;&nbsp;</td>
                                <td>Broadcom Inc.</td>
                                <td>AVGO</td>
                                <td>0.448103</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;281.85</td>
                                <td class="text-nowrap" style="color: green">0.94</td>
                                <td class="text-nowrap" style="color: green">(0.33%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>54&nbsp;&nbsp;</td>
                                <td>United Technologies Corporation</td>
                                <td>UTX</td>
                                <td>0.444238</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;136.59</td>
                                <td class="text-nowrap" style="color: green">0.44</td>
                                <td class="text-nowrap" style="color: green">(0.32%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>55&nbsp;&nbsp;</td>
                                <td>Linde plc</td>
                                <td>LIN</td>
                                <td>0.423909</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;194.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>56&nbsp;&nbsp;</td>
                                <td>Starbucks Corporation</td>
                                <td>SBUX</td>
                                <td>0.422032</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;86.60</td>
                                <td class="text-nowrap" style="color: green">0.24</td>
                                <td class="text-nowrap" style="color: green">(0.28%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>57&nbsp;&nbsp;</td>
                                <td>American Tower Corporation</td>
                                <td>AMT</td>
                                <td>0.410864</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;224.45</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>58&nbsp;&nbsp;</td>
                                <td>Lockheed Martin Corporation</td>
                                <td>LMT</td>
                                <td>0.394344</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;381.75</td>
                                <td class="text-nowrap" style="color: green">0.28</td>
                                <td class="text-nowrap" style="color: green">(0.07%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>59&nbsp;&nbsp;</td>
                                <td>QUALCOMM Incorporated</td>
                                <td>QCOM</td>
                                <td>0.372717</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;76.76</td>
                                <td class="text-nowrap" style="color: green">0.06</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>60&nbsp;&nbsp;</td>
                                <td>Eli Lilly and Company</td>
                                <td>LLY</td>
                                <td>0.372578</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;109.00</td>
                                <td class="text-nowrap" style="color: green">0.64</td>
                                <td class="text-nowrap" style="color: green">(0.59%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>61&nbsp;&nbsp;</td>
                                <td>Danaher Corporation</td>
                                <td>DHR</td>
                                <td>0.363389</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;138.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>62&nbsp;&nbsp;</td>
                                <td>3M Company</td>
                                <td>MMM</td>
                                <td>0.359051</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;158.39</td>
                                <td class="text-nowrap" style="color: green">0.29</td>
                                <td class="text-nowrap" style="color: green">(0.18%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>63&nbsp;&nbsp;</td>
                                <td>Lowe's Companies Inc.</td>
                                <td>LOW</td>
                                <td>0.342498</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;110.81</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>64&nbsp;&nbsp;</td>
                                <td>Booking Holdings Inc.</td>
                                <td>BKNG</td>
                                <td>0.342313</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;1,979.00</td>
                                <td class="text-nowrap" style="color: green">1.82</td>
                                <td class="text-nowrap" style="color: green">(0.09%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>65&nbsp;&nbsp;</td>
                                <td>Bristol-Myers Squibb Company</td>
                                <td>BMY</td>
                                <td>0.339692</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;51.61</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>66&nbsp;&nbsp;</td>
                                <td>CVS Health Corporation</td>
                                <td>CVS</td>
                                <td>0.331464</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;63.05</td>
                                <td class="text-nowrap" style="color: green">0.11</td>
                                <td class="text-nowrap" style="color: green">(0.17%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>67&nbsp;&nbsp;</td>
                                <td>Fidelity National Information Services Inc.</td>
                                <td>FIS</td>
                                <td>0.330989</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;132.03</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>68&nbsp;&nbsp;</td>
                                <td>United Parcel Service Inc. Class B</td>
                                <td>UPS</td>
                                <td>0.330211</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;116.02</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>69&nbsp;&nbsp;</td>
                                <td>Gilead Sciences Inc.</td>
                                <td>GILD</td>
                                <td>0.328945</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;64.12</td>
                                <td class="text-nowrap" style="color: green">0.13</td>
                                <td class="text-nowrap" style="color: green">(0.20%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>70&nbsp;&nbsp;</td>
                                <td>Altria Group Inc</td>
                                <td>MO</td>
                                <td>0.328843</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;42.70</td>
                                <td class="text-nowrap" style="color: green">0.13</td>
                                <td class="text-nowrap" style="color: green">(0.31%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>71&nbsp;&nbsp;</td>
                                <td>Mondelez International Inc. Class A</td>
                                <td>MDLZ</td>
                                <td>0.327758</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.83</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.02%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>72&nbsp;&nbsp;</td>
                                <td>American Express Company</td>
                                <td>AXP</td>
                                <td>0.320879</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;116.50</td>
                                <td class="text-nowrap" style="color: green">0.10</td>
                                <td class="text-nowrap" style="color: green">(0.09%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>73&nbsp;&nbsp;</td>
                                <td>CME Group Inc. Class A</td>
                                <td>CME</td>
                                <td>0.316055</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;213.36</td>
                                <td class="text-nowrap" style="color: green">0.53</td>
                                <td class="text-nowrap" style="color: green">(0.25%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>74&nbsp;&nbsp;</td>
                                <td>U.S. Bancorp</td>
                                <td>USB</td>
                                <td>0.311848</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.47</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>75&nbsp;&nbsp;</td>
                                <td>General Electric Company</td>
                                <td>GE</td>
                                <td>0.301358</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;8.80</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>76&nbsp;&nbsp;</td>
                                <td>Chubb Limited</td>
                                <td>CB</td>
                                <td>0.290400</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;155.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>77&nbsp;&nbsp;</td>
                                <td>Celgene Corporation</td>
                                <td>CELG</td>
                                <td>0.290146</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;100.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>78&nbsp;&nbsp;</td>
                                <td>Duke Energy Corporation</td>
                                <td>DUK</td>
                                <td>0.286690</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;95.97</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>79&nbsp;&nbsp;</td>
                                <td>Automatic Data Processing Inc.</td>
                                <td>ADP</td>
                                <td>0.286086</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;162.52</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>80&nbsp;&nbsp;</td>
                                <td>Intuit Inc.</td>
                                <td>INTU</td>
                                <td>0.285374</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;270.07</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>81&nbsp;&nbsp;</td>
                                <td>TJX Companies Inc</td>
                                <td>TJX</td>
                                <td>0.284802</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>82&nbsp;&nbsp;</td>
                                <td>Charter Communications Inc. Class A</td>
                                <td>CHTR</td>
                                <td>0.283117</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;423.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>83&nbsp;&nbsp;</td>
                                <td>Caterpillar Inc.</td>
                                <td>CAT</td>
                                <td>0.283111</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;128.66</td>
                                <td class="text-nowrap" style="color: green">0.26</td>
                                <td class="text-nowrap" style="color: green">(0.20%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>84&nbsp;&nbsp;</td>
                                <td>Stryker Corporation</td>
                                <td>SYK</td>
                                <td>0.278080</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;213.81</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>85&nbsp;&nbsp;</td>
                                <td>Dominion Energy Inc</td>
                                <td>D</td>
                                <td>0.275696</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;81.90</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>86&nbsp;&nbsp;</td>
                                <td>Becton Dickinson and Company</td>
                                <td>BDX</td>
                                <td>0.274193</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;252.86</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>87&nbsp;&nbsp;</td>
                                <td>Goldman Sachs Group Inc.</td>
                                <td>GS</td>
                                <td>0.265288</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;204.80</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>88&nbsp;&nbsp;</td>
                                <td>Southern Company</td>
                                <td>SO</td>
                                <td>0.264945</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;61.52</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>89&nbsp;&nbsp;</td>
                                <td>ConocoPhillips</td>
                                <td>COP</td>
                                <td>0.254443</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.60</td>
                                <td class="text-nowrap" style="color: green">0.17</td>
                                <td class="text-nowrap" style="color: green">(0.30%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>90&nbsp;&nbsp;</td>
                                <td>PNC Financial Services Group Inc.</td>
                                <td>PNC</td>
                                <td>0.252791</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;140.40</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>91&nbsp;&nbsp;</td>
                                <td>S&amp;P Global Inc.</td>
                                <td>SPGI</td>
                                <td>0.252401</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;252.99</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>92&nbsp;&nbsp;</td>
                                <td>Anthem Inc.</td>
                                <td>ANTM</td>
                                <td>0.248851</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;238.12</td>
                                <td class="text-nowrap" style="color: green">0.57</td>
                                <td class="text-nowrap" style="color: green">(0.24%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>93&nbsp;&nbsp;</td>
                                <td>Zoetis Inc. Class A</td>
                                <td>ZTS</td>
                                <td>0.248725</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;129.13</td>
                                <td class="text-nowrap" style="color: green">0.66</td>
                                <td class="text-nowrap" style="color: green">(0.51%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>94&nbsp;&nbsp;</td>
                                <td>Colgate-Palmolive Company</td>
                                <td>CL</td>
                                <td>0.248609</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;70.51</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>95&nbsp;&nbsp;</td>
                                <td>Fiserv Inc.</td>
                                <td>FISV</td>
                                <td>0.244849</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;105.33</td>
                                <td class="text-nowrap" style="color: red">-0.35</td>
                                <td class="text-nowrap" style="color: red">(-0.33%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>96&nbsp;&nbsp;</td>
                                <td>Intuitive Surgical Inc.</td>
                                <td>ISRG</td>
                                <td>0.241211</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;515.01</td>
                                <td class="text-nowrap" style="color: red">-3.02</td>
                                <td class="text-nowrap" style="color: red">(-0.58%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>97&nbsp;&nbsp;</td>
                                <td>Northrop Grumman Corporation</td>
                                <td>NOC</td>
                                <td>0.238041</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;362.70</td>
                                <td class="text-nowrap" style="color: green">0.48</td>
                                <td class="text-nowrap" style="color: green">(0.13%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>98&nbsp;&nbsp;</td>
                                <td>Crown Castle International Corp</td>
                                <td>CCI</td>
                                <td>0.234838</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;136.68</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>99&nbsp;&nbsp;</td>
                                <td>Cigna Corporation</td>
                                <td>CI</td>
                                <td>0.233729</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;152.40</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>100&nbsp;&nbsp;</td>
                                <td>Target Corporation</td>
                                <td>TGT</td>
                                <td>0.232164</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;112.10</td>
                                <td class="text-nowrap" style="color: green">0.27</td>
                                <td class="text-nowrap" style="color: green">(0.24%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>101&nbsp;&nbsp;</td>
                                <td>Raytheon Company</td>
                                <td>RTN</td>
                                <td>0.226073</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;198.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>102&nbsp;&nbsp;</td>
                                <td>Allergan plc</td>
                                <td>AGN</td>
                                <td>0.225807</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;169.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>103&nbsp;&nbsp;</td>
                                <td>Prologis Inc.</td>
                                <td>PLD</td>
                                <td>0.221199</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;85.84</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>104&nbsp;&nbsp;</td>
                                <td>CSX Corporation</td>
                                <td>CSX</td>
                                <td>0.219147</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.05</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>105&nbsp;&nbsp;</td>
                                <td>Intercontinental Exchange Inc.</td>
                                <td>ICE</td>
                                <td>0.217716</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;93.94</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>106&nbsp;&nbsp;</td>
                                <td>Deere &amp; Company</td>
                                <td>DE</td>
                                <td>0.216661</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;172.75</td>
                                <td class="text-nowrap" style="color: green">1.80</td>
                                <td class="text-nowrap" style="color: green">(1.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>107&nbsp;&nbsp;</td>
                                <td>Boston Scientific Corporation</td>
                                <td>BSX</td>
                                <td>0.216006</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;38.40</td>
                                <td class="text-nowrap" style="color: green">0.17</td>
                                <td class="text-nowrap" style="color: green">(0.44%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>108&nbsp;&nbsp;</td>
                                <td>Morgan Stanley</td>
                                <td>MS</td>
                                <td>0.211498</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;42.07</td>
                                <td class="text-nowrap" style="color: green">0.14</td>
                                <td class="text-nowrap" style="color: green">(0.33%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>109&nbsp;&nbsp;</td>
                                <td>BlackRock Inc.</td>
                                <td>BLK</td>
                                <td>0.202534</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;437.99</td>
                                <td class="text-nowrap" style="color: green">3.99</td>
                                <td class="text-nowrap" style="color: green">(0.92%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>110&nbsp;&nbsp;</td>
                                <td>Marsh &amp; McLennan Companies Inc.</td>
                                <td>MMC</td>
                                <td>0.199794</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;97.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>111&nbsp;&nbsp;</td>
                                <td>Equinix Inc.</td>
                                <td>EQIX</td>
                                <td>0.199065</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;566.00</td>
                                <td class="text-nowrap" style="color: red">-0.61</td>
                                <td class="text-nowrap" style="color: red">(-0.11%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>112&nbsp;&nbsp;</td>
                                <td>Ecolab Inc.</td>
                                <td>ECL</td>
                                <td>0.198373</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;194.74</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>113&nbsp;&nbsp;</td>
                                <td>Global Payments Inc.</td>
                                <td>GPN</td>
                                <td>0.198304</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;162.92</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>114&nbsp;&nbsp;</td>
                                <td>Micron Technology Inc.</td>
                                <td>MU</td>
                                <td>0.196290</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;45.25</td>
                                <td class="text-nowrap" style="color: green">0.15</td>
                                <td class="text-nowrap" style="color: green">(0.33%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>115&nbsp;&nbsp;</td>
                                <td>Phillips 66</td>
                                <td>PSX</td>
                                <td>0.196114</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;106.53</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>116&nbsp;&nbsp;</td>
                                <td>Kimberly-Clark Corporation</td>
                                <td>KMB</td>
                                <td>0.194283</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;137.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>117&nbsp;&nbsp;</td>
                                <td>DuPont de Nemours Inc.</td>
                                <td>DD</td>
                                <td>0.193461</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;65.20</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>118&nbsp;&nbsp;</td>
                                <td>Applied Materials Inc.</td>
                                <td>AMAT</td>
                                <td>0.193271</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;51.90</td>
                                <td class="text-nowrap" style="color: green">0.15</td>
                                <td class="text-nowrap" style="color: green">(0.29%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>119&nbsp;&nbsp;</td>
                                <td>Edwards Lifesciences Corporation</td>
                                <td>EW</td>
                                <td>0.193191</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;227.11</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>120&nbsp;&nbsp;</td>
                                <td>Air Products and Chemicals Inc.</td>
                                <td>APD</td>
                                <td>0.193112</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;217.29</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>121&nbsp;&nbsp;</td>
                                <td>American International Group Inc.</td>
                                <td>AIG</td>
                                <td>0.192283</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.42</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>122&nbsp;&nbsp;</td>
                                <td>L3Harris Technologies Inc</td>
                                <td>LHX</td>
                                <td>0.192257</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;208.94</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>123&nbsp;&nbsp;</td>
                                <td>Exelon Corporation</td>
                                <td>EXC</td>
                                <td>0.188719</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;47.51</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>124&nbsp;&nbsp;</td>
                                <td>Sherwin-Williams Company</td>
                                <td>SHW</td>
                                <td>0.188148</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;550.01</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>125&nbsp;&nbsp;</td>
                                <td>Waste Management Inc.</td>
                                <td>WM</td>
                                <td>0.188046</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;116.34</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>126&nbsp;&nbsp;</td>
                                <td>American Electric Power Company Inc.</td>
                                <td>AEP</td>
                                <td>0.186268</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;92.34</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>127&nbsp;&nbsp;</td>
                                <td>Norfolk Southern Corporation</td>
                                <td>NSC</td>
                                <td>0.185808</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;178.50</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>128&nbsp;&nbsp;</td>
                                <td>Simon Property Group Inc.</td>
                                <td>SPG</td>
                                <td>0.185395</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;148.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>129&nbsp;&nbsp;</td>
                                <td>Baxter International Inc.</td>
                                <td>BAX</td>
                                <td>0.183468</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;88.03</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>130&nbsp;&nbsp;</td>
                                <td>Aon plc</td>
                                <td>AON</td>
                                <td>0.182720</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;191.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>131&nbsp;&nbsp;</td>
                                <td>Illinois Tool Works Inc.</td>
                                <td>ITW</td>
                                <td>0.180984</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;154.53</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>132&nbsp;&nbsp;</td>
                                <td>Vertex Pharmaceuticals Incorporated</td>
                                <td>VRTX</td>
                                <td>0.178705</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;172.41</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>133&nbsp;&nbsp;</td>
                                <td>Illumina Inc.</td>
                                <td>ILMN</td>
                                <td>0.178700</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;302.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>134&nbsp;&nbsp;</td>
                                <td>General Motors Company</td>
                                <td>GM</td>
                                <td>0.178615</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;35.70</td>
                                <td class="text-nowrap" style="color: green">0.13</td>
                                <td class="text-nowrap" style="color: green">(0.37%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>135&nbsp;&nbsp;</td>
                                <td>Progressive Corporation</td>
                                <td>PGR</td>
                                <td>0.177975</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;75.22</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>136&nbsp;&nbsp;</td>
                                <td>Schlumberger NV</td>
                                <td>SLB</td>
                                <td>0.175573</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;32.64</td>
                                <td class="text-nowrap" style="color: green">0.16</td>
                                <td class="text-nowrap" style="color: green">(0.49%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>137&nbsp;&nbsp;</td>
                                <td>Charles Schwab Corporation</td>
                                <td>SCHW</td>
                                <td>0.172453</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;37.40</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.32%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>138&nbsp;&nbsp;</td>
                                <td>Estee Lauder Companies Inc. Class A</td>
                                <td>EL</td>
                                <td>0.172115</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;193.85</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>139&nbsp;&nbsp;</td>
                                <td>General Dynamics Corporation</td>
                                <td>GD</td>
                                <td>0.169575</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;179.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>140&nbsp;&nbsp;</td>
                                <td>Dollar General Corporation</td>
                                <td>DG</td>
                                <td>0.169215</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;162.01</td>
                                <td class="text-nowrap" style="color: red">-0.24</td>
                                <td class="text-nowrap" style="color: red">(-0.15%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>141&nbsp;&nbsp;</td>
                                <td>Biogen Inc.</td>
                                <td>BIIB</td>
                                <td>0.168705</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;223.30</td>
                                <td class="text-nowrap" style="color: green">0.09</td>
                                <td class="text-nowrap" style="color: green">(0.04%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>142&nbsp;&nbsp;</td>
                                <td>Activision Blizzard Inc.</td>
                                <td>ATVI</td>
                                <td>0.168575</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;55.11</td>
                                <td class="text-nowrap" style="color: green">0.29</td>
                                <td class="text-nowrap" style="color: green">(0.53%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>143&nbsp;&nbsp;</td>
                                <td>Capital One Financial Corporation</td>
                                <td>COF</td>
                                <td>0.167521</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;88.82</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>144&nbsp;&nbsp;</td>
                                <td>Marathon Petroleum Corporation</td>
                                <td>MPC</td>
                                <td>0.167184</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;63.47</td>
                                <td class="text-nowrap" style="color: green">0.05</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>145&nbsp;&nbsp;</td>
                                <td>Ross Stores Inc.</td>
                                <td>ROST</td>
                                <td>0.166015</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;112.46</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>146&nbsp;&nbsp;</td>
                                <td>Walgreens Boots Alliance Inc</td>
                                <td>WBA</td>
                                <td>0.164701</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.29</td>
                                <td class="text-nowrap" style="color: green">0.30</td>
                                <td class="text-nowrap" style="color: green">(0.56%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>147&nbsp;&nbsp;</td>
                                <td>Sysco Corporation</td>
                                <td>SYY</td>
                                <td>0.164660</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;78.87</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>148&nbsp;&nbsp;</td>
                                <td>Analog Devices Inc.</td>
                                <td>ADI</td>
                                <td>0.164345</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;111.20</td>
                                <td class="text-nowrap" style="color: red">-0.02</td>
                                <td class="text-nowrap" style="color: red">(-0.02%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>149&nbsp;&nbsp;</td>
                                <td>Sempra Energy</td>
                                <td>SRE</td>
                                <td>0.163607</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;145.49</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>150&nbsp;&nbsp;</td>
                                <td>Emerson Electric Co.</td>
                                <td>EMR</td>
                                <td>0.163505</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;67.04</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>151&nbsp;&nbsp;</td>
                                <td>EOG Resources Inc.</td>
                                <td>EOG</td>
                                <td>0.163439</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>152&nbsp;&nbsp;</td>
                                <td>BB&amp;T Corporation</td>
                                <td>BBT</td>
                                <td>0.161118</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;52.00</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>153&nbsp;&nbsp;</td>
                                <td>Kinder Morgan Inc Class P</td>
                                <td>KMI</td>
                                <td>0.160686</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;20.22</td>
                                <td class="text-nowrap" style="color: red">-0.01</td>
                                <td class="text-nowrap" style="color: red">(-0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>154&nbsp;&nbsp;</td>
                                <td>Aflac Incorporated</td>
                                <td>AFL</td>
                                <td>0.158086</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;52.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>155&nbsp;&nbsp;</td>
                                <td>Bank of New York Mellon Corporation</td>
                                <td>BK</td>
                                <td>0.153052</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;44.12</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>156&nbsp;&nbsp;</td>
                                <td>Welltower Inc.</td>
                                <td>WELL</td>
                                <td>0.152030</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;91.18</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>157&nbsp;&nbsp;</td>
                                <td>Travelers Companies Inc.</td>
                                <td>TRV</td>
                                <td>0.151603</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;142.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>158&nbsp;&nbsp;</td>
                                <td>Public Storage</td>
                                <td>PSA</td>
                                <td>0.150932</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;245.95</td>
                                <td class="text-nowrap" style="color: red">-0.01</td>
                                <td class="text-nowrap" style="color: red">(-0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>159&nbsp;&nbsp;</td>
                                <td>Occidental Petroleum Corporation</td>
                                <td>OXY</td>
                                <td>0.150098</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;41.25</td>
                                <td class="text-nowrap" style="color: green">0.13</td>
                                <td class="text-nowrap" style="color: green">(0.32%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>160&nbsp;&nbsp;</td>
                                <td>MetLife Inc.</td>
                                <td>MET</td>
                                <td>0.146786</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;45.84</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>161&nbsp;&nbsp;</td>
                                <td>Valero Energy Corporation</td>
                                <td>VLO</td>
                                <td>0.145801</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;88.00</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>162&nbsp;&nbsp;</td>
                                <td>Roper Technologies Inc.</td>
                                <td>ROP</td>
                                <td>0.144711</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;342.48</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>163&nbsp;&nbsp;</td>
                                <td>Allstate Corporation</td>
                                <td>ALL</td>
                                <td>0.144657</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;107.93</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>164&nbsp;&nbsp;</td>
                                <td>Prudential Financial Inc.</td>
                                <td>PRU</td>
                                <td>0.144523</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;89.42</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>165&nbsp;&nbsp;</td>
                                <td>Humana Inc.</td>
                                <td>HUM</td>
                                <td>0.144205</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;266.26</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>166&nbsp;&nbsp;</td>
                                <td>Yum! Brands Inc.</td>
                                <td>YUM</td>
                                <td>0.142829</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;114.50</td>
                                <td class="text-nowrap" style="color: green">0.05</td>
                                <td class="text-nowrap" style="color: green">(0.04%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>167&nbsp;&nbsp;</td>
                                <td>Moody's Corporation</td>
                                <td>MCO</td>
                                <td>0.140814</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;214.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>168&nbsp;&nbsp;</td>
                                <td>Lam Research Corporation</td>
                                <td>LRCX</td>
                                <td>0.139091</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;237.10</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>169&nbsp;&nbsp;</td>
                                <td>Ford Motor Company</td>
                                <td>F</td>
                                <td>0.138446</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;8.80</td>
                                <td class="text-nowrap" style="color: green">0.02</td>
                                <td class="text-nowrap" style="color: green">(0.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>170&nbsp;&nbsp;</td>
                                <td>FedEx Corporation</td>
                                <td>FDX</td>
                                <td>0.138365</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;145.61</td>
                                <td class="text-nowrap" style="color: green">0.07</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>171&nbsp;&nbsp;</td>
                                <td>Xcel Energy Inc.</td>
                                <td>XEL</td>
                                <td>0.137540</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;63.75</td>
                                <td class="text-nowrap" style="color: green">0.42</td>
                                <td class="text-nowrap" style="color: green">(0.66%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>172&nbsp;&nbsp;</td>
                                <td>Dow Inc.</td>
                                <td>DOW</td>
                                <td>0.136902</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;47.10</td>
                                <td class="text-nowrap" style="color: red">-0.03</td>
                                <td class="text-nowrap" style="color: red">(-0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>173&nbsp;&nbsp;</td>
                                <td>Johnson Controls International plc</td>
                                <td>JCI</td>
                                <td>0.136299</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;42.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>174&nbsp;&nbsp;</td>
                                <td>Cognizant Technology Solutions Corporation Class A</td>
                                <td>CTSH</td>
                                <td>0.135464</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;60.61</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>175&nbsp;&nbsp;</td>
                                <td>Eaton Corp. Plc</td>
                                <td>ETN</td>
                                <td>0.135374</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;79.64</td>
                                <td class="text-nowrap" style="color: red">-1.72</td>
                                <td class="text-nowrap" style="color: red">(-2.11%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>176&nbsp;&nbsp;</td>
                                <td>General Mills Inc.</td>
                                <td>GIS</td>
                                <td>0.134026</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>177&nbsp;&nbsp;</td>
                                <td>Marriott International Inc. Class A</td>
                                <td>MAR</td>
                                <td>0.132493</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;121.25</td>
                                <td class="text-nowrap" style="color: green">0.07</td>
                                <td class="text-nowrap" style="color: green">(0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>178&nbsp;&nbsp;</td>
                                <td>Constellation Brands Inc. Class A</td>
                                <td>STZ</td>
                                <td>0.132050</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;192.73</td>
                                <td class="text-nowrap" style="color: red">-0.35</td>
                                <td class="text-nowrap" style="color: red">(-0.18%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>179&nbsp;&nbsp;</td>
                                <td>Newmont Goldcorp Corporation</td>
                                <td>NEM</td>
                                <td>0.130408</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;37.71</td>
                                <td class="text-nowrap" style="color: green">0.09</td>
                                <td class="text-nowrap" style="color: green">(0.24%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>180&nbsp;&nbsp;</td>
                                <td>Autodesk Inc.</td>
                                <td>ADSK</td>
                                <td>0.130301</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;150.60</td>
                                <td class="text-nowrap" style="color: green">0.28</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>181&nbsp;&nbsp;</td>
                                <td>HCA Healthcare Inc</td>
                                <td>HCA</td>
                                <td>0.129012</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;120.43</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>182&nbsp;&nbsp;</td>
                                <td>Consolidated Edison Inc.</td>
                                <td>ED</td>
                                <td>0.126777</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;92.23</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.01%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>183&nbsp;&nbsp;</td>
                                <td>Public Service Enterprise Group Inc</td>
                                <td>PEG</td>
                                <td>0.126771</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;62.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>184&nbsp;&nbsp;</td>
                                <td>Advanced Micro Devices Inc.</td>
                                <td>AMD</td>
                                <td>0.126362</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.92</td>
                                <td class="text-nowrap" style="color: green">0.17</td>
                                <td class="text-nowrap" style="color: green">(0.57%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>185&nbsp;&nbsp;</td>
                                <td>Equity Residential</td>
                                <td>EQR</td>
                                <td>0.126051</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;87.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>186&nbsp;&nbsp;</td>
                                <td>Delta Air Lines Inc.</td>
                                <td>DAL</td>
                                <td>0.126039</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;52.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>187&nbsp;&nbsp;</td>
                                <td>Twitter Inc.</td>
                                <td>TWTR</td>
                                <td>0.125366</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;40.55</td>
                                <td class="text-nowrap" style="color: green">0.19</td>
                                <td class="text-nowrap" style="color: green">(0.47%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>188&nbsp;&nbsp;</td>
                                <td>O'Reilly Automotive Inc.</td>
                                <td>ORLY</td>
                                <td>0.125160</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;401.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>189&nbsp;&nbsp;</td>
                                <td>AvalonBay Communities Inc.</td>
                                <td>AVB</td>
                                <td>0.124973</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;218.08</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>190&nbsp;&nbsp;</td>
                                <td>eBay Inc.</td>
                                <td>EBAY</td>
                                <td>0.122665</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;38.35</td>
                                <td class="text-nowrap" style="color: red">-0.20</td>
                                <td class="text-nowrap" style="color: red">(-0.52%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>191&nbsp;&nbsp;</td>
                                <td>WEC Energy Group Inc</td>
                                <td>WEC</td>
                                <td>0.122353</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;93.81</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>192&nbsp;&nbsp;</td>
                                <td>TE Connectivity Ltd.</td>
                                <td>TEL</td>
                                <td>0.121586</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;90.15</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>193&nbsp;&nbsp;</td>
                                <td>SunTrust Banks Inc.</td>
                                <td>STI</td>
                                <td>0.119570</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;66.96</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>194&nbsp;&nbsp;</td>
                                <td>V.F. Corporation</td>
                                <td>VFC</td>
                                <td>0.117917</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;90.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>195&nbsp;&nbsp;</td>
                                <td>Amphenol Corporation Class A</td>
                                <td>APH</td>
                                <td>0.116930</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;96.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>196&nbsp;&nbsp;</td>
                                <td>ONEOK Inc.</td>
                                <td>OKE</td>
                                <td>0.116309</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.51</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>197&nbsp;&nbsp;</td>
                                <td>Motorola Solutions Inc.</td>
                                <td>MSI</td>
                                <td>0.114815</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;166.00</td>
                                <td class="text-nowrap" style="color: red">-1.53</td>
                                <td class="text-nowrap" style="color: red">(-0.91%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>198&nbsp;&nbsp;</td>
                                <td>Ingersoll-Rand Plc</td>
                                <td>IR</td>
                                <td>0.112814</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;115.38</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>199&nbsp;&nbsp;</td>
                                <td>Eversource Energy</td>
                                <td>ES</td>
                                <td>0.112586</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;85.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>200&nbsp;&nbsp;</td>
                                <td>SBA Communications Corp. Class A</td>
                                <td>SBAC</td>
                                <td>0.112296</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;241.47</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>201&nbsp;&nbsp;</td>
                                <td>Williams Companies Inc.</td>
                                <td>WMB</td>
                                <td>0.112278</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>202&nbsp;&nbsp;</td>
                                <td>PPG Industries Inc.</td>
                                <td>PPG</td>
                                <td>0.111915</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;119.17</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>203&nbsp;&nbsp;</td>
                                <td>Electronic Arts Inc.</td>
                                <td>EA</td>
                                <td>0.111823</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;94.19</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>204&nbsp;&nbsp;</td>
                                <td>IHS Markit Ltd.</td>
                                <td>INFO</td>
                                <td>0.111821</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;68.31</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>205&nbsp;&nbsp;</td>
                                <td>Zimmer Biomet Holdings Inc.</td>
                                <td>ZBH</td>
                                <td>0.111752</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;136.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>206&nbsp;&nbsp;</td>
                                <td>Ventas Inc.</td>
                                <td>VTR</td>
                                <td>0.110734</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;72.13</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>207&nbsp;&nbsp;</td>
                                <td>Digital Realty Trust Inc.</td>
                                <td>DLR</td>
                                <td>0.110714</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;129.31</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>208&nbsp;&nbsp;</td>
                                <td>Dollar Tree Inc.</td>
                                <td>DLTR</td>
                                <td>0.110540</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;115.59</td>
                                <td class="text-nowrap" style="color: green">0.40</td>
                                <td class="text-nowrap" style="color: green">(0.35%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>209&nbsp;&nbsp;</td>
                                <td>Paychex Inc.</td>
                                <td>PAYX</td>
                                <td>0.109533</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;84.69</td>
                                <td class="text-nowrap" style="color: green">0.06</td>
                                <td class="text-nowrap" style="color: green">(0.07%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>210&nbsp;&nbsp;</td>
                                <td>Edison International</td>
                                <td>EIX</td>
                                <td>0.108967</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;71.33</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>211&nbsp;&nbsp;</td>
                                <td>AutoZone Inc.</td>
                                <td>AZO</td>
                                <td>0.108321</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;1,084.00</td>
                                <td class="text-nowrap" style="color: red">-1.97</td>
                                <td class="text-nowrap" style="color: red">(-0.18%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>212&nbsp;&nbsp;</td>
                                <td>IQVIA Holdings Inc</td>
                                <td>IQV</td>
                                <td>0.108264</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;145.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>213&nbsp;&nbsp;</td>
                                <td>Hilton Worldwide Holdings Inc</td>
                                <td>HLT</td>
                                <td>0.107692</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;93.43</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>214&nbsp;&nbsp;</td>
                                <td>Southwest Airlines Co.</td>
                                <td>LUV</td>
                                <td>0.106471</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.20</td>
                                <td class="text-nowrap" style="color: green">0.28</td>
                                <td class="text-nowrap" style="color: green">(0.52%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>215&nbsp;&nbsp;</td>
                                <td>FirstEnergy Corp.</td>
                                <td>FE</td>
                                <td>0.106089</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;47.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>216&nbsp;&nbsp;</td>
                                <td>Verisk Analytics Inc</td>
                                <td>VRSK</td>
                                <td>0.105559</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;157.11</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>217&nbsp;&nbsp;</td>
                                <td>T. Rowe Price Group</td>
                                <td>TROW</td>
                                <td>0.105161</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;110.94</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>218&nbsp;&nbsp;</td>
                                <td>TransDigm Group Incorporated</td>
                                <td>TDG</td>
                                <td>0.104050</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;524.78</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>219&nbsp;&nbsp;</td>
                                <td>KLA Corporation</td>
                                <td>KLAC</td>
                                <td>0.102788</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;160.50</td>
                                <td class="text-nowrap" style="color: green">0.28</td>
                                <td class="text-nowrap" style="color: green">(0.17%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>220&nbsp;&nbsp;</td>
                                <td>FleetCor Technologies Inc.</td>
                                <td>FLT</td>
                                <td>0.101651</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;291.29</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>221&nbsp;&nbsp;</td>
                                <td>Cummins Inc.</td>
                                <td>CMI</td>
                                <td>0.101640</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;162.76</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>222&nbsp;&nbsp;</td>
                                <td>Realty Income Corporation</td>
                                <td>O</td>
                                <td>0.101603</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;78.13</td>
                                <td class="text-nowrap" style="color: green">0.24</td>
                                <td class="text-nowrap" style="color: green">(0.31%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>223&nbsp;&nbsp;</td>
                                <td>T-Mobile US Inc.</td>
                                <td>TMUS</td>
                                <td>0.101120</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;79.54</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.01%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>224&nbsp;&nbsp;</td>
                                <td>McKesson Corporation</td>
                                <td>MCK</td>
                                <td>0.100722</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;134.74</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>225&nbsp;&nbsp;</td>
                                <td>Discover Financial Services</td>
                                <td>DFS</td>
                                <td>0.099854</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;77.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>226&nbsp;&nbsp;</td>
                                <td>Tyson Foods Inc. Class A</td>
                                <td>TSN</td>
                                <td>0.099245</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;83.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>227&nbsp;&nbsp;</td>
                                <td>Ball Corporation</td>
                                <td>BLL</td>
                                <td>0.099169</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;72.33</td>
                                <td class="text-nowrap" style="color: red">-0.28</td>
                                <td class="text-nowrap" style="color: red">(-0.39%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>228&nbsp;&nbsp;</td>
                                <td>Willis Towers Watson Public Limited Company</td>
                                <td>WLTW</td>
                                <td>0.098790</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;188.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>229&nbsp;&nbsp;</td>
                                <td>Regeneron Pharmaceuticals Inc.</td>
                                <td>REGN</td>
                                <td>0.097784</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;300.77</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>230&nbsp;&nbsp;</td>
                                <td>DTE Energy Company</td>
                                <td>DTE</td>
                                <td>0.097531</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;129.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>231&nbsp;&nbsp;</td>
                                <td>HP Inc.</td>
                                <td>HPQ</td>
                                <td>0.097433</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;16.25</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.06%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>232&nbsp;&nbsp;</td>
                                <td>Xilinx Inc.</td>
                                <td>XLNX</td>
                                <td>0.096284</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;96.71</td>
                                <td class="text-nowrap" style="color: green">0.49</td>
                                <td class="text-nowrap" style="color: green">(0.51%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>233&nbsp;&nbsp;</td>
                                <td>Entergy Corporation</td>
                                <td>ETR</td>
                                <td>0.096058</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;117.23</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>234&nbsp;&nbsp;</td>
                                <td>IDEXX Laboratories Inc.</td>
                                <td>IDXX</td>
                                <td>0.095647</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;276.80</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>235&nbsp;&nbsp;</td>
                                <td>Hershey Company</td>
                                <td>HSY</td>
                                <td>0.095495</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;155.00</td>
                                <td class="text-nowrap" style="color: red">-0.31</td>
                                <td class="text-nowrap" style="color: red">(-0.20%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>236&nbsp;&nbsp;</td>
                                <td>PACCAR Inc</td>
                                <td>PCAR</td>
                                <td>0.094970</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.40</td>
                                <td class="text-nowrap" style="color: green">0.30</td>
                                <td class="text-nowrap" style="color: green">(0.43%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>237&nbsp;&nbsp;</td>
                                <td>Agilent Technologies Inc.</td>
                                <td>A</td>
                                <td>0.093928</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;75.30</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>238&nbsp;&nbsp;</td>
                                <td>American Water Works Company Inc.</td>
                                <td>AWK</td>
                                <td>0.092292</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;123.69</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>239&nbsp;&nbsp;</td>
                                <td>Archer-Daniels-Midland Company</td>
                                <td>ADM</td>
                                <td>0.090941</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;40.99</td>
                                <td class="text-nowrap" style="color: green">0.53</td>
                                <td class="text-nowrap" style="color: green">(1.31%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>240&nbsp;&nbsp;</td>
                                <td>Cintas Corporation</td>
                                <td>CTAS</td>
                                <td>0.090574</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;267.61</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>241&nbsp;&nbsp;</td>
                                <td>Corning Inc</td>
                                <td>GLW</td>
                                <td>0.090452</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.06</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>242&nbsp;&nbsp;</td>
                                <td>PPL Corporation</td>
                                <td>PPL</td>
                                <td>0.090399</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;31.84</td>
                                <td class="text-nowrap" style="color: green">0.41</td>
                                <td class="text-nowrap" style="color: green">(1.30%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>243&nbsp;&nbsp;</td>
                                <td>Alexion Pharmaceuticals Inc.</td>
                                <td>ALXN</td>
                                <td>0.090103</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;101.01</td>
                                <td class="text-nowrap" style="color: green">1.76</td>
                                <td class="text-nowrap" style="color: green">(1.77%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>244&nbsp;&nbsp;</td>
                                <td>Parker-Hannifin Corporation</td>
                                <td>PH</td>
                                <td>0.089759</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;179.66</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>245&nbsp;&nbsp;</td>
                                <td>Microchip Technology Incorporated</td>
                                <td>MCHP</td>
                                <td>0.089296</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;95.52</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>246&nbsp;&nbsp;</td>
                                <td>Monster Beverage Corporation</td>
                                <td>MNST</td>
                                <td>0.089030</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.30</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>247&nbsp;&nbsp;</td>
                                <td>Pioneer Natural Resources Company</td>
                                <td>PXD</td>
                                <td>0.089007</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;132.51</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>248&nbsp;&nbsp;</td>
                                <td>LyondellBasell Industries NV</td>
                                <td>LYB</td>
                                <td>0.088855</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;88.07</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>249&nbsp;&nbsp;</td>
                                <td>Essex Property Trust Inc.</td>
                                <td>ESS</td>
                                <td>0.088776</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;326.96</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>250&nbsp;&nbsp;</td>
                                <td>Aptiv PLC</td>
                                <td>APTV</td>
                                <td>0.087375</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;86.26</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>251&nbsp;&nbsp;</td>
                                <td>Cerner Corporation</td>
                                <td>CERN</td>
                                <td>0.087269</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;67.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>252&nbsp;&nbsp;</td>
                                <td>Stanley Black &amp; Decker Inc.</td>
                                <td>SWK</td>
                                <td>0.086933</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;145.28</td>
                                <td class="text-nowrap" style="color: red">-1.45</td>
                                <td class="text-nowrap" style="color: red">(-0.99%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>253&nbsp;&nbsp;</td>
                                <td>State Street Corporation</td>
                                <td>STT</td>
                                <td>0.086910</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.70</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>254&nbsp;&nbsp;</td>
                                <td>Chipotle Mexican Grill Inc.</td>
                                <td>CMG</td>
                                <td>0.086593</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;831.00</td>
                                <td class="text-nowrap" style="color: green">0.65</td>
                                <td class="text-nowrap" style="color: green">(0.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>255&nbsp;&nbsp;</td>
                                <td>Hartford Financial Services Group Inc.</td>
                                <td>HIG</td>
                                <td>0.086193</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.64</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>256&nbsp;&nbsp;</td>
                                <td>M&amp;T Bank Corporation</td>
                                <td>MTB</td>
                                <td>0.084957</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;156.48</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>257&nbsp;&nbsp;</td>
                                <td>Synopsys Inc.</td>
                                <td>SNPS</td>
                                <td>0.084333</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;140.34</td>
                                <td class="text-nowrap" style="color: green">1.73</td>
                                <td class="text-nowrap" style="color: green">(1.25%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>258&nbsp;&nbsp;</td>
                                <td>McCormick &amp; Company Incorporated</td>
                                <td>MKC</td>
                                <td>0.082840</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;164.76</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>259&nbsp;&nbsp;</td>
                                <td>AMETEK Inc.</td>
                                <td>AME</td>
                                <td>0.081636</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;88.51</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>260&nbsp;&nbsp;</td>
                                <td>Synchrony Financial</td>
                                <td>SYF</td>
                                <td>0.081339</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;33.04</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>261&nbsp;&nbsp;</td>
                                <td>Weyerhaeuser Company</td>
                                <td>WY</td>
                                <td>0.080962</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;27.13</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>262&nbsp;&nbsp;</td>
                                <td>Vulcan Materials Company</td>
                                <td>VMC</td>
                                <td>0.080389</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;147.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>263&nbsp;&nbsp;</td>
                                <td>VeriSign Inc.</td>
                                <td>VRSN</td>
                                <td>0.079578</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;187.48</td>
                                <td class="text-nowrap" style="color: green">0.99</td>
                                <td class="text-nowrap" style="color: green">(0.53%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>264&nbsp;&nbsp;</td>
                                <td>United Airlines Holdings Inc.</td>
                                <td>UAL</td>
                                <td>0.079115</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;87.15</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>265&nbsp;&nbsp;</td>
                                <td>Fortive Corp.</td>
                                <td>FTV</td>
                                <td>0.079090</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;67.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>266&nbsp;&nbsp;</td>
                                <td>Northern Trust Corporation</td>
                                <td>NTRS</td>
                                <td>0.078858</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;91.61</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>267&nbsp;&nbsp;</td>
                                <td>Corteva Inc</td>
                                <td>CTVA</td>
                                <td>0.078842</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;26.66</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>268&nbsp;&nbsp;</td>
                                <td>Kroger Co.</td>
                                <td>KR</td>
                                <td>0.078090</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;24.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>269&nbsp;&nbsp;</td>
                                <td>Fifth Third Bancorp</td>
                                <td>FITB</td>
                                <td>0.078025</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;26.96</td>
                                <td class="text-nowrap" style="color: green">0.11</td>
                                <td class="text-nowrap" style="color: green">(0.41%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>270&nbsp;&nbsp;</td>
                                <td>Clorox Company</td>
                                <td>CLX</td>
                                <td>0.077726</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;150.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>271&nbsp;&nbsp;</td>
                                <td>Expedia Group Inc.</td>
                                <td>EXPE</td>
                                <td>0.077087</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;138.20</td>
                                <td class="text-nowrap" style="color: red">-0.07</td>
                                <td class="text-nowrap" style="color: red">(-0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>272&nbsp;&nbsp;</td>
                                <td>Las Vegas Sands Corp.</td>
                                <td>LVS</td>
                                <td>0.076970</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;57.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>273&nbsp;&nbsp;</td>
                                <td>Ameren Corporation</td>
                                <td>AEE</td>
                                <td>0.076655</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;77.05</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>274&nbsp;&nbsp;</td>
                                <td>MSCI Inc. Class A</td>
                                <td>MSCI</td>
                                <td>0.076538</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;225.33</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>275&nbsp;&nbsp;</td>
                                <td>ResMed Inc.</td>
                                <td>RMD</td>
                                <td>0.076218</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;129.66</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>276&nbsp;&nbsp;</td>
                                <td>ANSYS Inc.</td>
                                <td>ANSS</td>
                                <td>0.075922</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;224.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>277&nbsp;&nbsp;</td>
                                <td>Church &amp; Dwight Co. Inc.</td>
                                <td>CHD</td>
                                <td>0.075836</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;74.12</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>278&nbsp;&nbsp;</td>
                                <td>Hewlett Packard Enterprise Co.</td>
                                <td>HPE</td>
                                <td>0.075559</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;14.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>279&nbsp;&nbsp;</td>
                                <td>Cadence Design Systems Inc.</td>
                                <td>CDNS</td>
                                <td>0.075494</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;66.05</td>
                                <td class="text-nowrap" style="color: green">0.15</td>
                                <td class="text-nowrap" style="color: green">(0.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>280&nbsp;&nbsp;</td>
                                <td>Republic Services Inc.</td>
                                <td>RSG</td>
                                <td>0.075413</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;86.38</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>281&nbsp;&nbsp;</td>
                                <td>Boston Properties Inc.</td>
                                <td>BXP</td>
                                <td>0.074981</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;128.20</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>282&nbsp;&nbsp;</td>
                                <td>CMS Energy Corporation</td>
                                <td>CMS</td>
                                <td>0.074809</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;63.88</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>283&nbsp;&nbsp;</td>
                                <td>Centene Corporation</td>
                                <td>CNC</td>
                                <td>0.074282</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;44.30</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.07%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>284&nbsp;&nbsp;</td>
                                <td>Rockwell Automation Inc.</td>
                                <td>ROK</td>
                                <td>0.074280</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;164.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>285&nbsp;&nbsp;</td>
                                <td>HCP Inc.</td>
                                <td>HCP</td>
                                <td>0.073624</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;36.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>286&nbsp;&nbsp;</td>
                                <td>CDW Corp.</td>
                                <td>CDW</td>
                                <td>0.072735</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;124.41</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>287&nbsp;&nbsp;</td>
                                <td>Royal Caribbean Cruises Ltd.</td>
                                <td>RCL</td>
                                <td>0.072538</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;107.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>288&nbsp;&nbsp;</td>
                                <td>Fastenal Company</td>
                                <td>FAST</td>
                                <td>0.072476</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;36.41</td>
                                <td class="text-nowrap" style="color: green">0.07</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>289&nbsp;&nbsp;</td>
                                <td>Keysight Technologies Inc</td>
                                <td>KEYS</td>
                                <td>0.072382</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;95.00</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>290&nbsp;&nbsp;</td>
                                <td>D.R. Horton Inc.</td>
                                <td>DHI</td>
                                <td>0.072293</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;51.99</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>291&nbsp;&nbsp;</td>
                                <td>Cincinnati Financial Corporation</td>
                                <td>CINF</td>
                                <td>0.072265</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;116.05</td>
                                <td class="text-nowrap" style="color: red">-0.08</td>
                                <td class="text-nowrap" style="color: red">(-0.07%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>292&nbsp;&nbsp;</td>
                                <td>Ameriprise Financial Inc.</td>
                                <td>AMP</td>
                                <td>0.071926</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;138.27</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>293&nbsp;&nbsp;</td>
                                <td>Alexandria Real Estate Equities Inc.</td>
                                <td>ARE</td>
                                <td>0.070867</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;153.97</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>294&nbsp;&nbsp;</td>
                                <td>KeyCorp</td>
                                <td>KEY</td>
                                <td>0.070694</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;17.40</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>295&nbsp;&nbsp;</td>
                                <td>Hess Corporation</td>
                                <td>HES</td>
                                <td>0.069964</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;66.77</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>296&nbsp;&nbsp;</td>
                                <td>Equifax Inc.</td>
                                <td>EFX</td>
                                <td>0.069738</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;143.93</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>297&nbsp;&nbsp;</td>
                                <td>CBRE Group Inc. Class A</td>
                                <td>CBRE</td>
                                <td>0.069652</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;51.82</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>298&nbsp;&nbsp;</td>
                                <td>Western Digital Corporation</td>
                                <td>WDC</td>
                                <td>0.068855</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.79</td>
                                <td class="text-nowrap" style="color: green">0.44</td>
                                <td class="text-nowrap" style="color: green">(0.75%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>299&nbsp;&nbsp;</td>
                                <td>Lennar Corporation Class A</td>
                                <td>LEN</td>
                                <td>0.068632</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.70</td>
                                <td class="text-nowrap" style="color: green">0.18</td>
                                <td class="text-nowrap" style="color: green">(0.31%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>300&nbsp;&nbsp;</td>
                                <td>Martin Marietta Materials Inc.</td>
                                <td>MLM</td>
                                <td>0.068407</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;265.43</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>301&nbsp;&nbsp;</td>
                                <td>Kraft Heinz Company</td>
                                <td>KHC</td>
                                <td>0.068401</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;27.13</td>
                                <td class="text-nowrap" style="color: green">0.05</td>
                                <td class="text-nowrap" style="color: green">(0.18%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>302&nbsp;&nbsp;</td>
                                <td>Mettler-Toledo International Inc.</td>
                                <td>MTD</td>
                                <td>0.068183</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;688.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>303&nbsp;&nbsp;</td>
                                <td>Copart Inc.</td>
                                <td>CPRT</td>
                                <td>0.066772</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;81.37</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>304&nbsp;&nbsp;</td>
                                <td>Carnival Corporation</td>
                                <td>CCL</td>
                                <td>0.066700</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;41.55</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>305&nbsp;&nbsp;</td>
                                <td>Arthur J. Gallagher &amp; Co.</td>
                                <td>AJG</td>
                                <td>0.066209</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;87.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>306&nbsp;&nbsp;</td>
                                <td>Laboratory Corporation of America Holdings</td>
                                <td>LH</td>
                                <td>0.065898</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;165.76</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>307&nbsp;&nbsp;</td>
                                <td>Halliburton Company</td>
                                <td>HAL</td>
                                <td>0.065398</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;18.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>308&nbsp;&nbsp;</td>
                                <td>Omnicom Group Inc</td>
                                <td>OMC</td>
                                <td>0.065266</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;74.65</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>309&nbsp;&nbsp;</td>
                                <td>First Republic Bank</td>
                                <td>FRC</td>
                                <td>0.064988</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;97.30</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>310&nbsp;&nbsp;</td>
                                <td>International Paper Company</td>
                                <td>IP</td>
                                <td>0.064805</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;41.56</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>311&nbsp;&nbsp;</td>
                                <td>Kellogg Company</td>
                                <td>K</td>
                                <td>0.063635</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;62.13</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>312&nbsp;&nbsp;</td>
                                <td>Maxim Integrated Products Inc.</td>
                                <td>MXIM</td>
                                <td>0.063535</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;57.74</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>313&nbsp;&nbsp;</td>
                                <td>Best Buy Co. Inc.</td>
                                <td>BBY</td>
                                <td>0.063396</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;69.53</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>314&nbsp;&nbsp;</td>
                                <td>Nucor Corporation</td>
                                <td>NUE</td>
                                <td>0.062706</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;52.16</td>
                                <td class="text-nowrap" style="color: red">-0.52</td>
                                <td class="text-nowrap" style="color: red">(-0.99%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>315&nbsp;&nbsp;</td>
                                <td>Mid-America Apartment Communities Inc.</td>
                                <td>MAA</td>
                                <td>0.062076</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;131.79</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>316&nbsp;&nbsp;</td>
                                <td>Amcor PLC</td>
                                <td>AMCR</td>
                                <td>0.062001</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;9.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>317&nbsp;&nbsp;</td>
                                <td>Citizens Financial Group Inc.</td>
                                <td>CFG</td>
                                <td>0.061929</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;34.48</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>318&nbsp;&nbsp;</td>
                                <td>Regions Financial Corporation</td>
                                <td>RF</td>
                                <td>0.061823</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;15.43</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>319&nbsp;&nbsp;</td>
                                <td>Evergy Inc.</td>
                                <td>EVRG</td>
                                <td>0.061298</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;63.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>320&nbsp;&nbsp;</td>
                                <td>Extra Space Storage Inc.</td>
                                <td>EXR</td>
                                <td>0.060439</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;115.67</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>321&nbsp;&nbsp;</td>
                                <td>Skyworks Solutions Inc.</td>
                                <td>SWKS</td>
                                <td>0.060079</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;85.65</td>
                                <td class="text-nowrap" style="color: green">0.25</td>
                                <td class="text-nowrap" style="color: green">(0.29%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>322&nbsp;&nbsp;</td>
                                <td>Celanese Corporation</td>
                                <td>CE</td>
                                <td>0.060063</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;121.87</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>323&nbsp;&nbsp;</td>
                                <td>Teleflex Incorporated</td>
                                <td>TFX</td>
                                <td>0.059986</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;322.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>324&nbsp;&nbsp;</td>
                                <td>Akamai Technologies Inc.</td>
                                <td>AKAM</td>
                                <td>0.059912</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;89.55</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>325&nbsp;&nbsp;</td>
                                <td>CarMax Inc.</td>
                                <td>KMX</td>
                                <td>0.059548</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;90.53</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>326&nbsp;&nbsp;</td>
                                <td>MGM Resorts International</td>
                                <td>MGM</td>
                                <td>0.058664</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.41</td>
                                <td class="text-nowrap" style="color: green">0.33</td>
                                <td class="text-nowrap" style="color: green">(1.18%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>327&nbsp;&nbsp;</td>
                                <td>Cooper Companies Inc.</td>
                                <td>COO</td>
                                <td>0.058467</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;293.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>328&nbsp;&nbsp;</td>
                                <td>Huntington Bancshares Incorporated</td>
                                <td>HBAN</td>
                                <td>0.058433</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;13.99</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>329&nbsp;&nbsp;</td>
                                <td>Ulta Beauty Inc</td>
                                <td>ULTA</td>
                                <td>0.058346</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;249.00</td>
                                <td class="text-nowrap" style="color: green">0.54</td>
                                <td class="text-nowrap" style="color: green">(0.22%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>330&nbsp;&nbsp;</td>
                                <td>UDR Inc.</td>
                                <td>UDR</td>
                                <td>0.058302</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;48.01</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>331&nbsp;&nbsp;</td>
                                <td>Baker Hughes a GE Company Class A</td>
                                <td>BHGE</td>
                                <td>0.058099</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;22.23</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>332&nbsp;&nbsp;</td>
                                <td>Waters Corporation</td>
                                <td>WAT</td>
                                <td>0.057861</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;213.62</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>333&nbsp;&nbsp;</td>
                                <td>Align Technology Inc.</td>
                                <td>ALGN</td>
                                <td>0.057771</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;200.40</td>
                                <td class="text-nowrap" style="color: green">0.24</td>
                                <td class="text-nowrap" style="color: green">(0.12%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>334&nbsp;&nbsp;</td>
                                <td>CenterPoint Energy Inc.</td>
                                <td>CNP</td>
                                <td>0.057537</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.27</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>335&nbsp;&nbsp;</td>
                                <td>Broadridge Financial Solutions Inc.</td>
                                <td>BR</td>
                                <td>0.057423</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;124.34</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>336&nbsp;&nbsp;</td>
                                <td>Principal Financial Group Inc.</td>
                                <td>PFG</td>
                                <td>0.057154</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;55.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>337&nbsp;&nbsp;</td>
                                <td>Dover Corporation</td>
                                <td>DOV</td>
                                <td>0.056523</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;97.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>338&nbsp;&nbsp;</td>
                                <td>Genuine Parts Company</td>
                                <td>GPC</td>
                                <td>0.056337</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;96.88</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>339&nbsp;&nbsp;</td>
                                <td>Hasbro Inc.</td>
                                <td>HAS</td>
                                <td>0.056299</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;121.29</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>340&nbsp;&nbsp;</td>
                                <td>Conagra Brands Inc.</td>
                                <td>CAG</td>
                                <td>0.056283</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.41</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>341&nbsp;&nbsp;</td>
                                <td>Take-Two Interactive Software Inc.</td>
                                <td>TTWO</td>
                                <td>0.056116</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;122.81</td>
                                <td class="text-nowrap" style="color: green">0.39</td>
                                <td class="text-nowrap" style="color: green">(0.32%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>342&nbsp;&nbsp;</td>
                                <td>Quest Diagnostics Incorporated</td>
                                <td>DGX</td>
                                <td>0.056110</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;103.52</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>343&nbsp;&nbsp;</td>
                                <td>Darden Restaurants Inc.</td>
                                <td>DRI</td>
                                <td>0.055986</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;113.04</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>344&nbsp;&nbsp;</td>
                                <td>Cardinal Health Inc.</td>
                                <td>CAH</td>
                                <td>0.055675</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;46.92</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>345&nbsp;&nbsp;</td>
                                <td>MarketAxess Holdings Inc.</td>
                                <td>MKTX</td>
                                <td>0.055464</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;348.19</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>346&nbsp;&nbsp;</td>
                                <td>Xylem Inc.</td>
                                <td>XYL</td>
                                <td>0.055296</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;77.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>347&nbsp;&nbsp;</td>
                                <td>Diamondback Energy Inc.</td>
                                <td>FANG</td>
                                <td>0.055199</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;83.60</td>
                                <td class="text-nowrap" style="color: red">-0.04</td>
                                <td class="text-nowrap" style="color: red">(-0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>348&nbsp;&nbsp;</td>
                                <td>Incyte Corporation</td>
                                <td>INCY</td>
                                <td>0.054886</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;76.12</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>349&nbsp;&nbsp;</td>
                                <td>Symantec Corporation</td>
                                <td>SYMC</td>
                                <td>0.054785</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.60</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.17%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>350&nbsp;&nbsp;</td>
                                <td>WellCare Health Plans Inc.</td>
                                <td>WCG</td>
                                <td>0.054395</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;264.45</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>351&nbsp;&nbsp;</td>
                                <td>Kansas City Southern</td>
                                <td>KSU</td>
                                <td>0.053627</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;133.50</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>352&nbsp;&nbsp;</td>
                                <td>Cboe Global Markets Inc</td>
                                <td>CBOE</td>
                                <td>0.053440</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;115.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>353&nbsp;&nbsp;</td>
                                <td>Hologic Inc.</td>
                                <td>HOLX</td>
                                <td>0.053334</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;49.06</td>
                                <td class="text-nowrap" style="color: green">0.27</td>
                                <td class="text-nowrap" style="color: green">(0.56%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>354&nbsp;&nbsp;</td>
                                <td>Freeport-McMoRan Inc.</td>
                                <td>FCX</td>
                                <td>0.053266</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;9.58</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.31%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>355&nbsp;&nbsp;</td>
                                <td>Atmos Energy Corporation</td>
                                <td>ATO</td>
                                <td>0.052852</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;111.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>356&nbsp;&nbsp;</td>
                                <td>Loews Corporation</td>
                                <td>L</td>
                                <td>0.052840</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;50.48</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>357&nbsp;&nbsp;</td>
                                <td>Concho Resources Inc.</td>
                                <td>CXO</td>
                                <td>0.052564</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;65.74</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>358&nbsp;&nbsp;</td>
                                <td>W.W. Grainger Inc.</td>
                                <td>GWW</td>
                                <td>0.052320</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;305.20</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>359&nbsp;&nbsp;</td>
                                <td>Gartner Inc.</td>
                                <td>IT</td>
                                <td>0.052126</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;145.15</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>360&nbsp;&nbsp;</td>
                                <td>Alliant Energy Corp</td>
                                <td>LNT</td>
                                <td>0.051563</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.03</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.01%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>361&nbsp;&nbsp;</td>
                                <td>Seagate Technology PLC</td>
                                <td>STX</td>
                                <td>0.051369</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;53.76</td>
                                <td class="text-nowrap" style="color: red">-0.05</td>
                                <td class="text-nowrap" style="color: red">(-0.09%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>362&nbsp;&nbsp;</td>
                                <td>Arista Networks Inc.</td>
                                <td>ANET</td>
                                <td>0.050827</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;236.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>363&nbsp;&nbsp;</td>
                                <td>International Flavors &amp; Fragrances Inc.</td>
                                <td>IFF</td>
                                <td>0.050789</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;118.15</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>364&nbsp;&nbsp;</td>
                                <td>Garmin Ltd.</td>
                                <td>GRMN</td>
                                <td>0.050731</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;87.08</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>365&nbsp;&nbsp;</td>
                                <td>Expeditors International of Washington Inc.</td>
                                <td>EXPD</td>
                                <td>0.050648</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;74.38</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.01%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>366&nbsp;&nbsp;</td>
                                <td>CBS Corporation Class B</td>
                                <td>CBS</td>
                                <td>0.050551</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;38.43</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>367&nbsp;&nbsp;</td>
                                <td>AmerisourceBergen Corporation</td>
                                <td>ABC</td>
                                <td>0.050403</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;81.96</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>368&nbsp;&nbsp;</td>
                                <td>NVR Inc.</td>
                                <td>NVR</td>
                                <td>0.050010</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;3,572.04</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>369&nbsp;&nbsp;</td>
                                <td>Jacobs Engineering Group Inc.</td>
                                <td>JEC</td>
                                <td>0.049816</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;91.85</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>370&nbsp;&nbsp;</td>
                                <td>J.M. Smucker Company</td>
                                <td>SJM</td>
                                <td>0.049717</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;107.02</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>371&nbsp;&nbsp;</td>
                                <td>Masco Corporation</td>
                                <td>MAS</td>
                                <td>0.049674</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;42.82</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>372&nbsp;&nbsp;</td>
                                <td>DENTSPLY SIRONA Inc.</td>
                                <td>XRAY</td>
                                <td>0.049569</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.11</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>373&nbsp;&nbsp;</td>
                                <td>Host Hotels &amp; Resorts Inc.</td>
                                <td>HST</td>
                                <td>0.049417</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;16.66</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>374&nbsp;&nbsp;</td>
                                <td>Citrix Systems Inc.</td>
                                <td>CTXS</td>
                                <td>0.048921</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;98.49</td>
                                <td class="text-nowrap" style="color: green">0.27</td>
                                <td class="text-nowrap" style="color: green">(0.28%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>375&nbsp;&nbsp;</td>
                                <td>Duke Realty Corporation</td>
                                <td>DRE</td>
                                <td>0.048886</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;33.55</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>376&nbsp;&nbsp;</td>
                                <td>NetApp Inc.</td>
                                <td>NTAP</td>
                                <td>0.048575</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;50.84</td>
                                <td class="text-nowrap" style="color: red">-0.65</td>
                                <td class="text-nowrap" style="color: red">(-1.26%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>377&nbsp;&nbsp;</td>
                                <td>Universal Health Services Inc. Class B</td>
                                <td>UHS</td>
                                <td>0.048572</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;146.13</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>378&nbsp;&nbsp;</td>
                                <td>Westinghouse Air Brake Technologies Corporation</td>
                                <td>WAB</td>
                                <td>0.048522</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;67.47</td>
                                <td class="text-nowrap" style="color: green">0.86</td>
                                <td class="text-nowrap" style="color: green">(1.29%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>379&nbsp;&nbsp;</td>
                                <td>IDEX Corporation</td>
                                <td>IEX</td>
                                <td>0.047833</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;159.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>380&nbsp;&nbsp;</td>
                                <td>C.H. Robinson Worldwide Inc.</td>
                                <td>CHRW</td>
                                <td>0.047188</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;85.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>381&nbsp;&nbsp;</td>
                                <td>Nasdaq Inc.</td>
                                <td>NDAQ</td>
                                <td>0.046869</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;99.31</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>382&nbsp;&nbsp;</td>
                                <td>">Brown-Forman Corporation Class B</td>
                                <td>">BF.B</td>
                                <td>0.046742</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;62.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>383&nbsp;&nbsp;</td>
                                <td>Regency Centers Corporation</td>
                                <td>REG</td>
                                <td>0.046696</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;68.49</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>384&nbsp;&nbsp;</td>
                                <td>Hormel Foods Corporation</td>
                                <td>HRL</td>
                                <td>0.046358</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;41.18</td>
                                <td class="text-nowrap" style="color: green">0.02</td>
                                <td class="text-nowrap" style="color: green">(0.05%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>385&nbsp;&nbsp;</td>
                                <td>Leidos Holdings Inc.</td>
                                <td>LDOS</td>
                                <td>0.046048</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;83.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>386&nbsp;&nbsp;</td>
                                <td>Lincoln National Corporation</td>
                                <td>LNC</td>
                                <td>0.046038</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;58.38</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>387&nbsp;&nbsp;</td>
                                <td>Advance Auto Parts Inc.</td>
                                <td>AAP</td>
                                <td>0.045748</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;158.56</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>388&nbsp;&nbsp;</td>
                                <td>CenturyLink Inc.</td>
                                <td>CTL</td>
                                <td>0.045743</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;11.77</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.34%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>389&nbsp;&nbsp;</td>
                                <td>Lamb Weston Holdings Inc.</td>
                                <td>LW</td>
                                <td>0.045715</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;76.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>390&nbsp;&nbsp;</td>
                                <td>Tractor Supply Company</td>
                                <td>TSCO</td>
                                <td>0.045545</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;94.31</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>391&nbsp;&nbsp;</td>
                                <td>Fortinet Inc.</td>
                                <td>FTNT</td>
                                <td>0.045163</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;79.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>392&nbsp;&nbsp;</td>
                                <td>Textron Inc.</td>
                                <td>TXT</td>
                                <td>0.044787</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;48.86</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>393&nbsp;&nbsp;</td>
                                <td>Jack Henry &amp; Associates Inc.</td>
                                <td>JKHY</td>
                                <td>0.044604</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;142.00</td>
                                <td class="text-nowrap" style="color: red">-0.10</td>
                                <td class="text-nowrap" style="color: red">(-0.07%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>394&nbsp;&nbsp;</td>
                                <td>NiSource Inc</td>
                                <td>NI</td>
                                <td>0.044062</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.14</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>395&nbsp;&nbsp;</td>
                                <td>American Airlines Group Inc.</td>
                                <td>AAL</td>
                                <td>0.044004</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;27.38</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.09%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>396&nbsp;&nbsp;</td>
                                <td>CF Industries Holdings Inc.</td>
                                <td>CF</td>
                                <td>0.044003</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;50.62</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>397&nbsp;&nbsp;</td>
                                <td>Fox Corporation Class A</td>
                                <td>FOXA</td>
                                <td>0.043905</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;31.35</td>
                                <td class="text-nowrap" style="color: red">-0.11</td>
                                <td class="text-nowrap" style="color: red">(-0.35%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>398&nbsp;&nbsp;</td>
                                <td>Pinnacle West Capital Corporation</td>
                                <td>PNW</td>
                                <td>0.043881</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;95.46</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>399&nbsp;&nbsp;</td>
                                <td>FMC Corporation</td>
                                <td>FMC</td>
                                <td>0.043025</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;83.75</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>400&nbsp;&nbsp;</td>
                                <td>AES Corporation</td>
                                <td>AES</td>
                                <td>0.042776</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;16.01</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>401&nbsp;&nbsp;</td>
                                <td>Molson Coors Brewing Company Class B</td>
                                <td>TAP</td>
                                <td>0.042748</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.06</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>402&nbsp;&nbsp;</td>
                                <td>Norwegian Cruise Line Holdings Ltd.</td>
                                <td>NCLH</td>
                                <td>0.042587</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;49.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>403&nbsp;&nbsp;</td>
                                <td>Wynn Resorts Limited</td>
                                <td>WYNN</td>
                                <td>0.041861</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;113.75</td>
                                <td class="text-nowrap" style="color: green">0.97</td>
                                <td class="text-nowrap" style="color: green">(0.86%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>404&nbsp;&nbsp;</td>
                                <td>Arconic Inc.</td>
                                <td>ARNC</td>
                                <td>0.041331</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;26.45</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>405&nbsp;&nbsp;</td>
                                <td>Everest Re Group Ltd.</td>
                                <td>RE</td>
                                <td>0.041107</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;250.50</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>406&nbsp;&nbsp;</td>
                                <td>Western Union Company</td>
                                <td>WU</td>
                                <td>0.040952</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.73</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>407&nbsp;&nbsp;</td>
                                <td>Packaging Corporation of America</td>
                                <td>PKG</td>
                                <td>0.040943</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;109.32</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>408&nbsp;&nbsp;</td>
                                <td>SVB Financial Group</td>
                                <td>SIVB</td>
                                <td>0.040800</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;202.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>409&nbsp;&nbsp;</td>
                                <td>Varian Medical Systems Inc.</td>
                                <td>VAR</td>
                                <td>0.040607</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;110.82</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>410&nbsp;&nbsp;</td>
                                <td>Whirlpool Corporation</td>
                                <td>WHR</td>
                                <td>0.040422</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;158.22</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>411&nbsp;&nbsp;</td>
                                <td>Vornado Realty Trust</td>
                                <td>VNO</td>
                                <td>0.040398</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;62.64</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>412&nbsp;&nbsp;</td>
                                <td>NRG Energy Inc.</td>
                                <td>NRG</td>
                                <td>0.040261</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;39.66</td>
                                <td class="text-nowrap" style="color: green">0.48</td>
                                <td class="text-nowrap" style="color: green">(1.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>413&nbsp;&nbsp;</td>
                                <td>Noble Energy Inc.</td>
                                <td>NBL</td>
                                <td>0.039720</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;20.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>414&nbsp;&nbsp;</td>
                                <td>Raymond James Financial Inc.</td>
                                <td>RJF</td>
                                <td>0.039704</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;80.58</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>415&nbsp;&nbsp;</td>
                                <td>Eastman Chemical Company</td>
                                <td>EMN</td>
                                <td>0.039654</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;72.61</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>416&nbsp;&nbsp;</td>
                                <td>TechnipFMC Plc</td>
                                <td>FTI</td>
                                <td>0.039477</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.47</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>417&nbsp;&nbsp;</td>
                                <td>Comerica Incorporated</td>
                                <td>CMA</td>
                                <td>0.039111</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;65.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>418&nbsp;&nbsp;</td>
                                <td>PulteGroup Inc.</td>
                                <td>PHM</td>
                                <td>0.038911</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;36.89</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>419&nbsp;&nbsp;</td>
                                <td>Mylan N.V.</td>
                                <td>MYL</td>
                                <td>0.038899</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;18.90</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>420&nbsp;&nbsp;</td>
                                <td>Tiffany &amp; Co.</td>
                                <td>TIF</td>
                                <td>0.038708</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;91.88</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>421&nbsp;&nbsp;</td>
                                <td>Allegion PLC</td>
                                <td>ALLE</td>
                                <td>0.038587</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;101.46</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>422&nbsp;&nbsp;</td>
                                <td>Federal Realty Investment Trust</td>
                                <td>FRT</td>
                                <td>0.038434</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;136.20</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>423&nbsp;&nbsp;</td>
                                <td>Avery Dennison Corporation</td>
                                <td>AVY</td>
                                <td>0.038422</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;113.37</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>424&nbsp;&nbsp;</td>
                                <td>Henry Schein Inc.</td>
                                <td>HSIC</td>
                                <td>0.038390</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;62.92</td>
                                <td class="text-nowrap" style="color: red">-0.02</td>
                                <td class="text-nowrap" style="color: red">(-0.03%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>425&nbsp;&nbsp;</td>
                                <td>Globe Life Inc.</td>
                                <td>GL</td>
                                <td>0.038369</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;94.25</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>426&nbsp;&nbsp;</td>
                                <td>E*TRADE Financial Corporation</td>
                                <td>ETFC</td>
                                <td>0.038319</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;39.48</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>427&nbsp;&nbsp;</td>
                                <td>LKQ Corporation</td>
                                <td>LKQ</td>
                                <td>0.038181</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;30.82</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.02%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>428&nbsp;&nbsp;</td>
                                <td>Iron Mountain Inc.</td>
                                <td>IRM</td>
                                <td>0.037859</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;32.24</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>429&nbsp;&nbsp;</td>
                                <td>J.B. Hunt Transport Services Inc.</td>
                                <td>JBHT</td>
                                <td>0.037685</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;110.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>430&nbsp;&nbsp;</td>
                                <td>Marathon Oil Corporation</td>
                                <td>MRO</td>
                                <td>0.037587</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;11.76</td>
                                <td class="text-nowrap" style="color: green">0.02</td>
                                <td class="text-nowrap" style="color: green">(0.17%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>431&nbsp;&nbsp;</td>
                                <td>Qorvo Inc.</td>
                                <td>QRVO</td>
                                <td>0.037504</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;77.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>432&nbsp;&nbsp;</td>
                                <td>WestRock Company</td>
                                <td>WRK</td>
                                <td>0.037189</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;36.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>433&nbsp;&nbsp;</td>
                                <td>PerkinElmer Inc.</td>
                                <td>PKI</td>
                                <td>0.036431</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;82.00</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>434&nbsp;&nbsp;</td>
                                <td>Discovery Inc. Class C</td>
                                <td>DISCK</td>
                                <td>0.036381</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;26.10</td>
                                <td class="text-nowrap" style="color: green">0.01</td>
                                <td class="text-nowrap" style="color: green">(0.02%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>435&nbsp;&nbsp;</td>
                                <td>United Rentals Inc.</td>
                                <td>URI</td>
                                <td>0.035860</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;118.40</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>436&nbsp;&nbsp;</td>
                                <td>Huntington Ingalls Industries Inc.</td>
                                <td>HII</td>
                                <td>0.035437</td>
                                <td class="text-nowrap"><img src="/img/down.gif" alt=""> &nbsp;&nbsp;209.58</td>
                                <td class="text-nowrap" style="color: red">-2.16</td>
                                <td class="text-nowrap" style="color: red">(-1.02%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>437&nbsp;&nbsp;</td>
                                <td>Kimco Realty Corporation</td>
                                <td>KIM</td>
                                <td>0.035001</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;20.74</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>438&nbsp;&nbsp;</td>
                                <td>Snap-on Incorporated</td>
                                <td>SNA</td>
                                <td>0.034880</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;156.46</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>439&nbsp;&nbsp;</td>
                                <td>Devon Energy Corporation</td>
                                <td>DVN</td>
                                <td>0.034525</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;21.49</td>
                                <td class="text-nowrap" style="color: green">0.23</td>
                                <td class="text-nowrap" style="color: green">(1.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>440&nbsp;&nbsp;</td>
                                <td>Kohl's Corporation</td>
                                <td>KSS</td>
                                <td>0.033148</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;51.58</td>
                                <td class="text-nowrap" style="color: green">0.12</td>
                                <td class="text-nowrap" style="color: green">(0.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>441&nbsp;&nbsp;</td>
                                <td>HollyFrontier Corporation</td>
                                <td>HFC</td>
                                <td>0.033012</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.88</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>442&nbsp;&nbsp;</td>
                                <td>Juniper Networks Inc.</td>
                                <td>JNPR</td>
                                <td>0.033002</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.69</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>443&nbsp;&nbsp;</td>
                                <td>Alaska Air Group Inc.</td>
                                <td>ALK</td>
                                <td>0.032737</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;66.08</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>444&nbsp;&nbsp;</td>
                                <td>Campbell Soup Company</td>
                                <td>CPB</td>
                                <td>0.032731</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;46.87</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>445&nbsp;&nbsp;</td>
                                <td>DISH Network Corporation Class A</td>
                                <td>DISH</td>
                                <td>0.032717</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;34.06</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>446&nbsp;&nbsp;</td>
                                <td>Viacom Inc. Class B</td>
                                <td>VIAB</td>
                                <td>0.032569</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.18</td>
                                <td class="text-nowrap" style="color: green">0.16</td>
                                <td class="text-nowrap" style="color: green">(0.70%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>447&nbsp;&nbsp;</td>
                                <td>Apartment Investment and Management Company Class A</td>
                                <td>AIV</td>
                                <td>0.032515</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.55</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>448&nbsp;&nbsp;</td>
                                <td>F5 Networks Inc.</td>
                                <td>FFIV</td>
                                <td>0.032464</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;135.67</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>449&nbsp;&nbsp;</td>
                                <td>National Oilwell Varco Inc.</td>
                                <td>NOV</td>
                                <td>0.032377</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;21.18</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>450&nbsp;&nbsp;</td>
                                <td>Fortune Brands Home &amp; Security Inc.</td>
                                <td>FBHS</td>
                                <td>0.031904</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.62</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>451&nbsp;&nbsp;</td>
                                <td>Assurant Inc.</td>
                                <td>AIZ</td>
                                <td>0.031628</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;125.78</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>452&nbsp;&nbsp;</td>
                                <td>Interpublic Group of Companies Inc.</td>
                                <td>IPG</td>
                                <td>0.031359</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;20.08</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>453&nbsp;&nbsp;</td>
                                <td>Zions Bancorporation N.A.</td>
                                <td>ZION</td>
                                <td>0.031357</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;44.09</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>454&nbsp;&nbsp;</td>
                                <td>Apache Corporation</td>
                                <td>APA</td>
                                <td>0.031320</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;21.45</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.14%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>455&nbsp;&nbsp;</td>
                                <td>Franklin Resources Inc.</td>
                                <td>BEN</td>
                                <td>0.030686</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;27.32</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>456&nbsp;&nbsp;</td>
                                <td>Cabot Oil &amp; Gas Corporation</td>
                                <td>COG</td>
                                <td>0.030308</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;17.60</td>
                                <td class="text-nowrap" style="color: green">0.04</td>
                                <td class="text-nowrap" style="color: green">(0.23%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>457&nbsp;&nbsp;</td>
                                <td>Mohawk Industries Inc.</td>
                                <td>MHK</td>
                                <td>0.030307</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;124.42</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>458&nbsp;&nbsp;</td>
                                <td>ABIOMED Inc.</td>
                                <td>ABMD</td>
                                <td>0.029880</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;170.00</td>
                                <td class="text-nowrap" style="color: green">0.36</td>
                                <td class="text-nowrap" style="color: green">(0.21%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>459&nbsp;&nbsp;</td>
                                <td>Newell Brands Inc</td>
                                <td>NWL</td>
                                <td>0.029869</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;18.95</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>460&nbsp;&nbsp;</td>
                                <td>BorgWarner Inc.</td>
                                <td>BWA</td>
                                <td>0.029819</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;37.20</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>461&nbsp;&nbsp;</td>
                                <td>Tapestry Inc.</td>
                                <td>TPR</td>
                                <td>0.029583</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;25.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>462&nbsp;&nbsp;</td>
                                <td>Nielsen Holdings Plc</td>
                                <td>NLSN</td>
                                <td>0.029111</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;20.69</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>463&nbsp;&nbsp;</td>
                                <td>Perrigo Co. Plc</td>
                                <td>PRGO</td>
                                <td>0.029018</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;53.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>464&nbsp;&nbsp;</td>
                                <td>FLIR Systems Inc.</td>
                                <td>FLIR</td>
                                <td>0.028641</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;52.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>465&nbsp;&nbsp;</td>
                                <td>Albemarle Corporation</td>
                                <td>ALB</td>
                                <td>0.028636</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;68.91</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>466&nbsp;&nbsp;</td>
                                <td>DXC Technology Co.</td>
                                <td>DXC</td>
                                <td>0.028564</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.03</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>467&nbsp;&nbsp;</td>
                                <td>Mosaic Company</td>
                                <td>MOS</td>
                                <td>0.027636</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;20.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>468&nbsp;&nbsp;</td>
                                <td>SL Green Realty Corp.</td>
                                <td>SLG</td>
                                <td>0.026797</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;80.26</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>469&nbsp;&nbsp;</td>
                                <td>A. O. Smith Corporation</td>
                                <td>AOS</td>
                                <td>0.026290</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;47.99</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>470&nbsp;&nbsp;</td>
                                <td>PVH Corp.</td>
                                <td>PVH</td>
                                <td>0.025909</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;87.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>471&nbsp;&nbsp;</td>
                                <td>Robert Half International Inc.</td>
                                <td>RHI</td>
                                <td>0.025568</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;54.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>472&nbsp;&nbsp;</td>
                                <td>Sealed Air Corporation</td>
                                <td>SEE</td>
                                <td>0.025382</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;40.71</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>473&nbsp;&nbsp;</td>
                                <td>Pentair plc</td>
                                <td>PNR</td>
                                <td>0.024904</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;37.36</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>474&nbsp;&nbsp;</td>
                                <td>People's United Financial Inc.</td>
                                <td>PBCT</td>
                                <td>0.024759</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;16.65</td>
                                <td class="text-nowrap" style="color: green">0.96</td>
                                <td class="text-nowrap" style="color: green">(6.08%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>475&nbsp;&nbsp;</td>
                                <td>Invesco Ltd.</td>
                                <td>IVZ</td>
                                <td>0.024249</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;15.84</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>476&nbsp;&nbsp;</td>
                                <td>Unum Group</td>
                                <td>UNM</td>
                                <td>0.023562</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.29</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>477&nbsp;&nbsp;</td>
                                <td>Flowserve Corporation</td>
                                <td>FLS</td>
                                <td>0.022882</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;45.47</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>478&nbsp;&nbsp;</td>
                                <td>Xerox Holdings Corporation</td>
                                <td>XRX</td>
                                <td>0.022491</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.41</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>479&nbsp;&nbsp;</td>
                                <td>Quanta Services Inc.</td>
                                <td>PWR</td>
                                <td>0.022434</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;38.82</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>480&nbsp;&nbsp;</td>
                                <td>DaVita Inc.</td>
                                <td>DVA</td>
                                <td>0.022170</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;56.44</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>481&nbsp;&nbsp;</td>
                                <td>Harley-Davidson Inc.</td>
                                <td>HOG</td>
                                <td>0.021987</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;35.10</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>482&nbsp;&nbsp;</td>
                                <td>Hanesbrands Inc.</td>
                                <td>HBI</td>
                                <td>0.021907</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;15.26</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>483&nbsp;&nbsp;</td>
                                <td>Leggett &amp; Platt Incorporated</td>
                                <td>LEG</td>
                                <td>0.020851</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;40.88</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>484&nbsp;&nbsp;</td>
                                <td>News Corporation Class A</td>
                                <td>NWSA</td>
                                <td>0.020240</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;13.50</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>485&nbsp;&nbsp;</td>
                                <td>Rollins Inc.</td>
                                <td>ROL</td>
                                <td>0.020103</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;35.17</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>486&nbsp;&nbsp;</td>
                                <td>Fox Corporation Class B</td>
                                <td>FOX</td>
                                <td>0.019935</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;31.16</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>487&nbsp;&nbsp;</td>
                                <td>Alliance Data Systems Corporation</td>
                                <td>ADS</td>
                                <td>0.019866</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;122.55</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>488&nbsp;&nbsp;</td>
                                <td>H&amp;R Block Inc.</td>
                                <td>HRB</td>
                                <td>0.019393</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;23.63</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>489&nbsp;&nbsp;</td>
                                <td>Macy's Inc</td>
                                <td>M</td>
                                <td>0.019310</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;15.75</td>
                                <td class="text-nowrap" style="color: green">0.03</td>
                                <td class="text-nowrap" style="color: green">(0.19%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>490&nbsp;&nbsp;</td>
                                <td>Ralph Lauren Corporation Class A</td>
                                <td>RL</td>
                                <td>0.019257</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;93.72</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>491&nbsp;&nbsp;</td>
                                <td>IPG Photonics Corporation</td>
                                <td>IPGP</td>
                                <td>0.018857</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;136.01</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>492&nbsp;&nbsp;</td>
                                <td>Cimarex Energy Co.</td>
                                <td>XEC</td>
                                <td>0.018556</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;45.32</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>493&nbsp;&nbsp;</td>
                                <td>Discovery Inc. Class A</td>
                                <td>DISCA</td>
                                <td>0.017637</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;28.43</td>
                                <td class="text-nowrap" style="color: green">0.46</td>
                                <td class="text-nowrap" style="color: green">(1.64%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>494&nbsp;&nbsp;</td>
                                <td>Capri Holdings Limited</td>
                                <td>CPRI</td>
                                <td>0.017607</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;29.60</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>495&nbsp;&nbsp;</td>
                                <td>Helmerich &amp; Payne Inc.</td>
                                <td>HP</td>
                                <td>0.016587</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;38.35</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>496&nbsp;&nbsp;</td>
                                <td>TripAdvisor Inc.</td>
                                <td>TRIP</td>
                                <td>0.015588</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;39.11</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>497&nbsp;&nbsp;</td>
                                <td>L Brands Inc.</td>
                                <td>LB</td>
                                <td>0.015488</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;17.50</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>498&nbsp;&nbsp;</td>
                                <td>Affiliated Managers Group Inc.</td>
                                <td>AMG</td>
                                <td>0.015291</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;75.97</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>499&nbsp;&nbsp;</td>
                                <td>Gap Inc.</td>
                                <td>GPS</td>
                                <td>0.014698</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;17.15</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>500&nbsp;&nbsp;</td>
                                <td>Under Armour Inc. Class A</td>
                                <td>UAA</td>
                                <td>0.014633</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;19.99</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>501&nbsp;&nbsp;</td>
                                <td>Nordstrom Inc.</td>
                                <td>JWN</td>
                                <td>0.014550</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;34.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>502&nbsp;&nbsp;</td>
                                <td>Under Armour Inc. Class C</td>
                                <td>UA</td>
                                <td>0.014168</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;18.26</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>503&nbsp;&nbsp;</td>
                                <td>Coty Inc. Class A</td>
                                <td>COTY</td>
                                <td>0.012403</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;10.57</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>504&nbsp;&nbsp;</td>
                                <td>Macerich Company</td>
                                <td>MAC</td>
                                <td>0.011880</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;27.98</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                            <tr class='sp_list_item zero-opacity'>
                                <td>505&nbsp;&nbsp;</td>
                                <td>News Corporation Class B</td>
                                <td>NWS</td>
                                <td>0.006811</td>
                                <td class="text-nowrap"> &nbsp;&nbsp;13.76</td>
                                <td class="text-nowrap" style="color: green">0.00</td>
                                <td class="text-nowrap" style="color: green">(0.00%)</td>
                            </tr>
                        </tbody>


  </div> -->















</div>


</template>

<script>

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      title: state => state.timeline.currentTitle
    })
  }
};

</script>

<style lang="scss">
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}
.bold {
  font-weight: 900;
}
</style>
