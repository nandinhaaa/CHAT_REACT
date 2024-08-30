import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    onSentApi,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSentApi();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Assistente Esportivo</p>
        <img src={assets.compass_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Olá atleta!</span>
          </p>
          <p>Como posso lhe ajudar hoje no mundo dos esportes?</p>
        </div>
        {!showResult ? (
          <>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick('Dicas de atividade')}>
                <p>Dicas de atividade</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Bem-Estar Mental')}>
                <p>Bem-Estar Mental</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Beneficios do Esporte')}>
                <p>Beneficios do Esporte</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Olá, Precisa de Dicas?')}>
                <p>Olá, Precisa de Dicas</p>
                <img src={assets.light_icon} alt="" /> 
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.gemini_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.coach_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Entre com sua pergunta sobre esportes"
            />
            <div>
              <img onClick={() => onSentApi()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Assistente Esportivo usa uma base de dados atualizada sobre esportes, treinos e competições. Para melhores resultados, verifique as fontes recomendadas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
