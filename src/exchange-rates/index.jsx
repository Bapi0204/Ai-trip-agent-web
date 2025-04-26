import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

function ConverterForm() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapCurrencies = () => {
    setFromCurrency(prev => toCurrency);
    setToCurrency(prev => fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Something went wrong!");
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  // Inline Styles
//   const styles = {
//     converterContainer: {
//       maxWidth: "410px",
//       margin: "0 auto",
//       padding: "40px 30px 50px",
//       borderRadius: "8px",
//       backdropFilter: "blur(30px)",
//       background: "rgba(2, 7, 40, 0.5)",
//       border: "1px solid rgba(255, 255, 255, 0.3)",
//       boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
//     },
//     title: {
//       color: "#fff",
//       fontSize: "1.65rem",
//       fontWeight: "600",
//       textAlign: "center",
//       marginBottom: "45px",
//     },
//     formGroup: {
//       display: "flex",
//       flexDirection: "column",
//       marginBottom: "30px",
//     },
//     formLabel: {
//       color: "#fff",
//       fontWeight: "500",
//       marginBottom: "9px",
//       fontSize: "1rem",
//     },
//     formInput: {
//       outline: "none",
//       fontSize: "1.1rem",
//       padding: "0 15px",
//       color: "#fff",
//       fontWeight: "500",
//       minHeight: "48px",
//       borderRadius: "6px",
//       background: "rgba(255, 255, 255, 0.1)",
//       border: "1px solid rgba(255, 255, 255, 0.5)",
//     },
//     formCurrencyGroup: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: "30px",
//     },
//     swapIcon: {
//       height: "40px",
//       width: "40px",
//       cursor: "pointer",
//       display: "flex",
//       marginTop: "25px",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "50%",
//       background: "rgba(255, 255, 255, 0.1)",
//       border: "1px solid rgba(255, 255, 255, 0.5)",
//       transition: "0.2s ease",
//     },
//     submitButton: {
//       width: "100%",
//       minHeight: "52px",
//       borderRadius: "6px",
//       border: "none",
//       outline: "none",
//       fontSize: "1rem",
//       fontWeight: "600",
//       cursor: "pointer",
//       marginTop: "5px",
//       background: isLoading ? "rgba(255,255,255,0.5)" : "white",
//       transition: "0.2s ease",
//     },
//     exchangeRateResult: {
//       color: "#fff",
//       fontSize: "1.1rem",
//       fontWeight: "600",
//       textAlign: "center",
//       padding: "25px 0",
//       marginTop: "25px",
//       borderRadius: "6px",
//       letterSpacing: "0.5px",
//       background: "rgba(255, 255, 255, 0.15)",
//     }
//   };
// const styles = {
//     converterContainer: {
//       maxWidth: "410px",
//       margin: "20px auto", // Added some top-bottom margin
//       padding: "50px 40px 60px", // Increased padding
//       borderRadius: "10px",
//       backdropFilter: "blur(30px)",
//       background: "rgba(30, 30, 60, 0.6)", // Darker bluish background
//       border: "1px solid rgba(255, 255, 255, 0.3)",
//       boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
//     },
//     title: {
//       color: "#fff",
//       fontSize: "1.7rem",
//       fontWeight: "600",
//       textAlign: "center",
//       marginBottom: "50px", // Increased space below title
//     },
//     formGroup: {
//       display: "flex",
//       flexDirection: "column",
//       marginBottom: "35px", // Slightly more spacing
//     },
//     formLabel: {
//       color: "#fff",
//       fontWeight: "500",
//       marginBottom: "12px", // Slightly bigger margin
//       fontSize: "1rem",
//     },
//     formInput: {
//       outline: "none",
//       fontSize: "1.1rem",
//       padding: "0 20px", // More padding inside input
//       color: "#fff",
//       fontWeight: "500",
//       minHeight: "50px", // Slightly bigger input box
//       borderRadius: "8px",
//       background: "rgba(255, 255, 255, 0.2)", // Lighter input background
//       border: "1px solid rgba(255, 255, 255, 0.5)",
//     },
//     formCurrencyGroup: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: "35px",
//     },
//     swapIcon: {
//       height: "45px",
//       width: "45px",
//       cursor: "pointer",
//       display: "flex",
//       marginTop: "20px",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "50%",
//       background: "rgba(255, 255, 255, 0.2)", // Slightly brighter circle
//       border: "1px solid rgba(255, 255, 255, 0.5)",
//       transition: "0.2s ease",
//     },
//     submitButton: {
//       width: "100%",
//       minHeight: "55px",
//       borderRadius: "8px",
//       border: "none",
//       outline: "none",
//       fontSize: "1rem",
//       fontWeight: "600",
//       cursor: "pointer",
//       marginTop: "10px",
//       background: isLoading ? "rgba(255,255,255,0.5)" : "white",
//       transition: "0.2s ease",
//     },
//     exchangeRateResult: {
//       color: "#fff",
//       fontSize: "1.15rem",
//       fontWeight: "600",
//       textAlign: "center",
//       padding: "30px 0",
//       marginTop: "30px",
//       borderRadius: "8px",
//       letterSpacing: "0.5px",
//       background: "rgba(255, 255, 255, 0.2)", // Lighter result background
//     }
//   };

const styles = {
    pageBackground: {
      minHeight: "100vh",
      margin: 0,
      padding: "20px",
      background: "linear-gradient(135deg, #c2d6f7, #e0ecfc)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    converterContainer: {
      maxWidth: "410px",
      margin: "20px auto",
      padding: "50px 40px 60px",
      borderRadius: "10px",
      backdropFilter: "blur(30px)",
      background: "rgba(30, 30, 60, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
    },
    title: {
      color: "#fff",
      fontSize: "1.7rem",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "50px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "35px",
    },
    formLabel: {
      color: "#fff",
      fontWeight: "500",
      marginBottom: "12px",
      fontSize: "1rem",
    },
    formInput: {
      outline: "none",
      fontSize: "1.1rem",
      padding: "0 20px",
      color: "#fff",
      fontWeight: "500",
      minHeight: "50px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
    },
    formCurrencyGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "35px",
    },
    swapIcon: {
        height: "45px",
        width: "45px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        transition: "0.2s ease",
        margin: "0 15px",    // Add horizontal margin
      },
    submitButton: {
      width: "100%",
      minHeight: "55px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      background: isLoading ? "rgba(255,255,255,0.5)" : "white",
      transition: "0.2s ease",
    },
    exchangeRateResult: {
      color: "#fff",
      fontSize: "1.15rem",
      fontWeight: "600",
      textAlign: "center",
      padding: "30px 0",
      marginTop: "30px",
      borderRadius: "8px",
      letterSpacing: "0.5px",
      background: "rgba(255, 255, 255, 0.2)",
    },
  };
  
  return (
    <div style={styles.pageBackground}>
    <div style={styles.converterContainer}>
      <h1 style={styles.title}>Currency Converter</h1>

      <form onSubmit={handleFormSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.formLabel}>Enter Amount</label>
          <input
            type="number"
            style={styles.formInput}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div style={styles.formCurrencyGroup}>
          <div style={{ flex: 1 }}>
            <label style={styles.formLabel}>From</label>
            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>

          <div style={styles.swapIcon} onClick={handleSwapCurrencies}>
            <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#fff"
              />
            </svg>
          </div>

          <div style={{ flex: 1 }}>
            <label style={styles.formLabel}>To</label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Get Exchange Rate"}
        </button>

        <p style={styles.exchangeRateResult}>
          {isLoading ? "Getting exchange rate..." : result}
        </p>
      </form>
    </div>
    </div>
  );
}

export default ConverterForm;
