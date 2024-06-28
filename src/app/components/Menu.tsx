"use client";
import React, { useState } from "react";

const menuItems = {
    lunch: [
      {
        category: 'Starters',
        items: [
          { name: 'CLASSIC EDAMAME', description: 'with brown butter, black truffle and pickled onions', price: 8 },
          { name: 'SPICY EDAMAME', description: 'with szechuan pepper and lime zest', price: 9 },
          { name: 'TRUFFLE EDAMAME', description: 'with truffle butter sauce', price: 11 },
          { name: 'COCONUT SOUP', description: 'with shrimps', price: 12 },
          { name: 'MISO SOUP', description: 'with nori, tofu and chives', price: 7 },
          { name: 'VEGGIE GYOZA', description: 'with chili mayonnaise and young onions', price: 9 },
          { name: 'BEEF CARPACCIO', description: 'with brown butter, black truffle and pickled onions', price: 26 },
          { name: 'VEGGIE GYOZA', description: 'with chili mayonnaise and young onions', price: 9 },
          { name: 'CHICKEN GYOZA', description: 'with chili mayonnaise and young onions', price: 11 },
          { name: 'FRESH OYSTER ON ICE', description: 'with pickled onions and lemon', price: 5 },
          { name: 'DEEPFRIED SOFTSHELL CRAB', description: 'with wasabi mayonnaise and limes', price: 15 },
          { name: 'FRIED SHRIMPS', description: 'with yuzu mayonnaise and limes', price: 14 },
          { name: 'DUMPLING – "GERMAN DAMPFNUDEL"', description: 'German specialty served with nut butter, 2 pieces', price: 8 },
        ],
      },
      {
        category: 'Mains',
        items: [
          { name: 'GRILLED AIRLINE CHICKEN BREAST', description: 'with teriyaki sesame sauce, broccolini and sweet potato', price: 26 },
          { name: 'BLACK ANGUS FILET (5OZ)', description: 'with Miso chives butter, asparagus and creamy truffle risotto', price: 42 },
          { name: 'SALMON PAN-FRIED', description: 'on the skin with Miso lime sauce, rainbow carrots and baby spinach', price: 26 },
          { name: 'FOCACCIA SANDWICH', description: 'with avocado, smoked salmon and 2 sunny side up eggs', price: 16 },
          { name: 'FOCACCIA SANDWICH', description: 'with avocado, burrata and 2 sunny side up eggs', price: 15 },
        ],
      },
      {
        category: 'Salad',
        items: [
          { name: 'FRESH SUMMER SALAD', description: 'with grilled watermelon, burrata, roasted walnuts and fresh herbs marinated in sweet potato dressing', price: 16 },
          { name: 'MISO CHICKEN SALAD', description: 'grilled airline chicken breast marinated in miso, fresh herb mix, rainbow carrots and cilantro marinated in miso sesame dressing', price: 18 },
          { name: 'CESAR SALAD', description: 'romana salad, parmesan, garlic croutons, cherry tomatoes, rainbow carrots and cesar dressing', price: 13 },
          { name: 'CEVICHE SALAD', description: 'Fish of the day marinated in ponzu, lime juice, cilantro and herb mix', price: 20 },
        ],
      },
      {
        category: 'Sweets',
        items: [
          { name: 'GREEK YOGURT', description: 'with fresh berries, caramelized nuts and honey', price: 7 },
          { name: 'CHIA PUDDING', description: 'with coconut milk, white chocolate and mango', price: 8 },
          { name: 'BROWNIE WITH VALRHONA', description: 'with caramel sauce and tahiti vanilla ice cream', price: 17 },
        ],
      },
    ],
    dinner: [
      {
        category: 'Meat & Fish',
        items: [
          { name: 'WAGYU', description: 'served with one sauce of choice: Blueberry BBQ Sauce, Miso chives butter or Teriyaki-Sesame Sauce', price: 130 },
          { name: 'BLACK ANGUS', description: '5oz Cut', price: 39 },
          { name: 'BLACK ANGUS', description: '10oz Cut', price: 78 },
          { name: 'PORTERHOUSE', description: 'for Two, 35oz', price: 165 },
          { name: 'WAGYU BAO BURGER', description: '3 pieces, steamed "bao bun", grilled wagyu slices, pickled cucumbers, roasted onions and miso mayonnaise', price: 42 },
          { name: 'GRILLED AIRLINE CHICKEN BREAST', description: 'with teriyaki sesame sauce, broccolini and sweet potato', price: 32 },
          { name: 'BLACK COD WITH MISO', description: 'with miso lime sauce', price: 34 },
          { name: 'SALMON PAN-FRIED', description: 'on the skin with Miso lime sauce, rainbow carrots and baby spinach', price: 32 },
        ],
      },
      {
        category: 'Sides',
        items: [
          { name: 'GREEN ASPARAGUS', description: 'with ponzu and pickled onions', price: 12 },
          { name: 'TRUFFLE FRIES', description: 'with Italian cheese', price: 12 },
          { name: 'SWEET POTATO MASH', description: 'with cilantro pesto', price: 12 },
          { name: 'BROCCOLINI', description: 'grilled with sesame crumble', price: 12 },
          { name: 'GRILLED VEGGIE MIX', description: 'with miso', price: 13 },
          { name: 'FRIED VEGGIE MIX', description: '', price: 13 },
          { name: 'TRUFFLE RISOTTO', description: 'cooked in dashi with young onions', price: 14 },
        ],
      },
      {
        category: 'Sushi',
        items: [
          { name: 'SALMON NIGIRI', description: '', price: 7 },
          { name: 'BLUEFIN TUNA NIGIRI', description: '', price: 8 },
          { name: 'TORO NIGIRI', description: '', price: 10 },
          { name: 'AVOCADO NIGIRI', description: '', price: 6 },
          { name: 'SHISO CUCUMBER NIGIRI', description: '', price: 6 },
          { name: 'TAMAGO NIGIRI', description: '', price: 5 },
          { name: 'UNI NIGIRI', description: '', price: 18 },
          { name: 'UNAGI NIGIRI', description: '', price: 8 },
          { name: 'HAMACHI NIGIRI', description: '', price: 8 },
          { name: 'GRILLED WAGYU NIGIRI', description: 'with truffle', price: 26 },
          { name: 'CAVIAR AS ADD ON 1G', description: '', price: 15 },
          { name: 'TUNA', description: '', price: 10 },
          { name: 'SALMON', description: '', price: 9 },
          { name: 'UNI TRAIN', description: 'maki filled with uni and wasabi mayonnaise, topped with pickled daikon and crispy panko', price: 18 },
          { name: 'RED DEVIL', description: 'salmon stained in beet juice with red shiso, beet crumble and pickled onions', price: 17 },
          { name: 'UMAMI UNAGI ROLL', description: 'unagi, deepfried asparagus and avocado', price: 18 },
          { name: 'GREEN ROLL', description: 'avocado outside, pickled pumpkin and deepfried asparagus inside, topped with miso mayonnaise', price: 16 },
          { name: 'SHISO LOVER', description: 'shiso cress outside, rootbeet and cream cheese with yuzu inside, you are going to love it', price: 16 },
          { name: 'SIGNATURE ROLL', description: 'avocado outside, deepfried ebi and pickled cucumber inside, topped with chives and unagi sauce', price: 16 },
          { name: 'TEMPURA SAKE', description: 'deepfried inside out roll filled with salmon, cucumber and avocado, topped with chilli mayonnaise and daikon cress', price: 15 },
          { name: 'BURRATA BASIL ROLL', description: 'deep fried roll filled with burrata, topped with fresh basil, basil mayonnaise and tomato relish', price: 15 },
        ],
      },
      {
        category: 'Chef’s Sushi Plates',
        items: [
          { name: 'CHEF’S SUSHI LARGE', description: 'Edamame, Red Devil, Signature Roll, Salmon Nigiri (x2), Hamachi Nigiri (x2), Crab Maki (x4), Sashimi Salmon (x2), Sashimi Hamachi (x2)', price: 72 },
          { name: 'CHEF’S SUSHI SMALL', description: 'Edamame, Red Devil, Salmon Nigiri (x2), Crab Maki (x4)', price: 36 },
          { name: 'CHEF’S SUSHI VEGGIE LARGE', description: 'Edamame, Shiso Lover, Green Roll, Shiso Cucumber Nigiri (x2), Avocado Maki (x4), Avocado Sashimi', price: 62 },
        ],
      },
      {
        category: 'Sashimi',
        items: [
          { name: 'HAMACHI SASHIMI', description: 'slowly flambéed with yuzu kosho', price: 24 },
          { name: 'SALMON SASHIMI', description: 'with buttermilk, salmon roe and young onions', price: 20 },
          { name: 'BLUE FIN TUNA SASHIMI', description: 'with yuzu, fresh wasabi and shiso', price: 22 },
          { name: 'TORO SASHIMI', description: 'blue fin toro with onion-dashi, roasted onions and daikon cress', price: 26 },
          { name: 'AVOCADO SASHIMI', description: 'with ume sesame and red onions', price: 14 },
          { name: 'SCALLOPS WITH TANGERINE', description: 'raw scallops with tangerine ponzu and ume sesame', price: 19 },
        ],
      },
    ],
  };
  



const Menu: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<"lunch" | "dinner">("lunch");

    const getMenuItems = () => {
        return selectedTab === 'lunch' ? menuItems.lunch : menuItems.dinner;
      };

    return (
        <div
            style={{
                paddingInline: "5vw",
                paddingTop: "3.2rem",
                paddingBottom: "3.2rem",
                background: "white",
                color: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
                width: "100%",
                maxWidth: "52rem",
                // marginBottom: "3rem",
                marginTop: "2.4rem",
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    letterSpacing: "0.32em",
                }}
            >
                MENU
            </h1>
            <div
                style={{
                    display: "flex",
                    marginBottom: "1.6rem",
                    gap: "2rem",
                    alignItems: "center",
                }}
            >
                <div
                    onClick={() => setSelectedTab("lunch")}
                    style={{
                        cursor: "pointer",
                        position: "relative",
                        paddingBlock: "0.5rem",
                        gap: "0.2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            fontSize: "1.2rem",
                            letterSpacing: "0.12em",
                            color: selectedTab === "lunch" ? "#000" : "#0008",
                        }}
                    >
                        Lunch
                    </span>
                    <div
                        style={{
                            height: "1px",
                            backgroundColor: "#000",
                            width: "2.4rem",
                            opacity: selectedTab === "lunch" ? 1 : 0,
                        }}
                    />
                </div>
                <div
                    onClick={() => setSelectedTab("dinner")}
                    style={{
                        cursor: "pointer",
                        position: "relative",
                        paddingBlock: "0.5rem",
                        gap: "0.2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            fontSize: "1.2rem",
                            color: selectedTab === "dinner" ? "#000" : "#0008",
                            letterSpacing: "0.12em",
                        }}
                    >
                        Dinner
                    </span>
                    <div
                        style={{
                            height: "1px",
                            backgroundColor: "#000",
                            width: "2.4rem",
                            opacity: selectedTab === "dinner" ? 1 : 0,
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display:"flex",
                    flexDirection: "column",
                    marginTop: "1rem",
                }}
            >
                <h3
                    style={{
                        textTransform: "uppercase",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        letterSpacing: "0.48em",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {selectedTab == "lunch" ? 'Lunch menu' : 'Dinner menu'}
                </h3>

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "1.6rem",
                    }}
                >
                    <div
                        style={{
                            width: "8rem",
                            borderTop: "0.3px solid #00000088",
                        }}
                    />
                </div>
                {getMenuItems().map((category, index) => (
                    <div key={index} style={{ marginTop: "2.4rem" }}>
                        <h4
                            style={{
                                fontSize: "2rem",
                                // color: "#FF2911",
                                color: "#8566DE",
                                letterSpacing: "0.24em",
                                fontWeight: 800,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "1.2rem",
                            }}
                        >
                            {category.category}
                        </h4>
                        {category.items.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "1.4rem",
                                    gap: "2rem",
                                }}
                            >
                                <div>
                                    <h5
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.12em",
                                        }}
                                    >
                                        {item.name}
                                    </h5>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#000",
                                            opacity: 0.6,
                                            fontStyle: "italic",
                                            marginTop: "0.2rem",
                                            letterSpacing: "0.12em",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontSize: "1.2rem",
                                        letterSpacing: "0.08em",
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Menu;
