import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo";
import TeacherCard from '../components/TeacherCard/TeacherCard';

const IndexPage = () => (
  <Layout>
    <SEO title="Ficha dos Professores" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container-fluid" style={{ marginTop: 10 }}>
      <div className="column">
        <div className="prof col-lg">
          <TeacherCard title={'Moacir'}>
            <div id="moacir-data" className="prof-data">
              <div className="card materia">ICC-II</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                P1 - 01/10<br />
                P2 - 22/11<br />
                T1 até 15/08
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <span>
              <a rel="noopener noreferrer"
                 href="https://run.codes/offerings/view/863"
                 target="_blank"
                 className="text-nowrap"
              >
                run.codes
              </a>{" "}
                  (Turma DK74)
            </span>
                <a rel="noopener noreferrer"
                   href="https://ae4.tidia-ae.usp.br/portal/site/f70c4368-1333-4ab6-aeb7-bf6035bf3f71"
                   target="_blank"
                >
                  Tidia
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                Mon. QUA 13h30 -&gt; 15h30 (sala 3-245)<br />
                <a rel="noopener noreferrer" href="https://2018-scc0201.slack.com/" target="_blank">
                  Dúvidas via slack
                </a>
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                moacir@icmc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer"
                   href="https://ae4.tidia-ae.usp.br/access/content/group/f70c4368-1333-4ab6-aeb7-bf6035bf3f71/SCC0201.Apresentacao.pdf"
                   target="_blank"
                >
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <a rel="noopener noreferrer"
                   href="https://drive.google.com/file/d/1nsv3NT0ua-8U37-BN4i2f1QNE_rG57eO/view?usp=sharing"
                   target="_blank"
                >
                  Critério de Avaliação
                </a>
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </TeacherCard>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#robson-data"
            >
              Robson
            </button>
            <div id="robson-data" className="prof-data collapse">
              <div className="card materia">ALG-I</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                P1 - 08/10<br />
                P2 - 26/11<br />
                SUB - 03/12
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer" href target="_blank">
                  Tidia
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                Atd. QUI 17h00 -&gt; 19h00 (sala 3-245)
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                robson@icmc.usp.br, PROF<br />
                gui.queiroz@usp.br, monitor Guilherme
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1b6hAtZ5YN9hpEfYjCULPYsZZtqYsydOb/view?usp=sharing"
                  target="_blank"
                >
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                0,7×MP + 0,3MT se MP&amp;&amp;MT&gt;=5<br />
                ou min(MP,MT) caso contrário
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#massa-data"
            >
              Massa
            </button>
            <div id="massa-data" className="prof-data collapse">
              <div className="card materia">Discreta</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                ??<br />
                NÃO ESQUEÇA DE LEVAR A IDENTIDADE!
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer"
                  href="http://conteudo.icmc.usp.br/pessoas/eugenio/MatDisc/MatDisc.htm"
                  target="_blank"
                >
                  Site Pessoal
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                Atd. QUA 16:00 -&gt; 17:40 (sala 4-210)<br />
                Não haverá monitoria
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                eugenio@icmc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer"
                  href="http://conteudo.icmc.usp.br/pessoas/eugenio/MatDisc/ement_coord.pdf"
                  target="_blank"
                >
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                Media=(P1x2+P2x3)/5 <br />
                ou 4bola em cada +90% freq
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                <a rel="noopener noreferrer"
                  href="http://conteudo.icmc.usp.br/pessoas/eugenio/MatDisc/L1_matdisc.pdf"
                  target="_blank"
                >
                  1° Lista
                </a>
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                <a rel="noopener noreferrer"
                  href="http://conteudo.icmc.usp.br/pessoas/eugenio/MatDisc/logica.pdf"
                  target="_blank"
                >
                  1° Aula
                </a>
                <a rel="noopener noreferrer"
                  href="http://conteudo.icmc.usp.br/pessoas/eugenio/MatDisc/errata.pdf"
                  target="_blank"
                >
                  Errata do Livro
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#wolf-data"
            >
              Wolf
            </button>
            <div id="wolf-data" className="prof-data collapse">
              <div className="card materia">Sistemas Digitais</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                P1 - 25/09<br />
                P2 - 20/11
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer"
                  href="https://ae4.tidia-ae.usp.br/portal/site/55a20603-3689-407c-83df-997010724da2/page/8be92043-71c0-4699-bd1c-c0e2315e08ad#"
                  target="_blank"
                >
                  Tidia
                </a>
                <u>
                  (Calendário de Aulas disponível na página principal do
                  Tidia)
                </u>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                ??
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                denis@icmc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer" href target="_blank">
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                Média das duas provas
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#francisco-data"
            >
              Francisco
            </button>
            <div id="francisco-data" className="prof-data collapse">
              <div className="card materia">Física BCC-A</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                P1 - 31/08<br />
                P2 - 16/10<br />
                P3 - 30/11<br />
                SUB - 07/12
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer"
                  href="http://www.gradaluno.ifsc.usp.br/index.php?disc=7600105-1"
                  target="_blank"
                >
                  IFSC
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                ??
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                guimaraes@ifsc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer"
                  href="https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=fcm0200&nomdis="
                  target="_blank"
                >
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                0.9*MP + 0.1*Mprovinha
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#faria-data"
            >
              Faria
            </button>
            <div id="faria-data" className="prof-data collapse">
              <div className="card materia">Física BCC-B</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                P1 - 31/08<br />
                P2 - 16/10<br />
                P3 - 30/11<br />
                SUB - 07/12
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                ??
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                faria@ifsc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer" href target="_blank">
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                ??
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#danilo-data"
            >
              Danilo
            </button>
            <div id="danilo-data" className="prof-data collapse">
              <div className="card materia">
                Prática em Sistemas Digitais<br />
              </div>
              <div className="card provas">
                <h3>PROVAS</h3>
                ??
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                ??
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                spatti@icmc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer" href target="_blank">
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                ??
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        <div className="prof col-lg">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#irene-data"
            >
              Irene
            </button>
            <div id="irene-data" className="prof-data collapse">
              <div className="card materia">Cálculo II</div>
              <div className="card provas">
                <h3>PROVAS</h3>
                ??
              </div>
              <div className="card sistemas">
                <h3>SISTEMAS UTILIZADOS</h3>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
                <a rel="noopener noreferrer" href target="_blank">
                  ?
                </a>
              </div>
              <div className="card atendimento">
                <h3>MONITORIA/ATENDIMENTO</h3>
                ??
              </div>
              <div className="card email">
                <h3>CONTATO</h3>
                onnis@icmc.usp.br
              </div>
              <div className="card ementa">
                <a rel="noopener noreferrer" href target="_blank">
                  Bibliografia/Ementa
                </a>
              </div>
              <div className="card avaliacao">
                <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                ??
              </div>
              <div className="card listas">
                <h3>LISTAS</h3>
                Vazio
              </div>
              <div className="card arquivos">
                <h3>ARQUIVOS</h3>
                Vazio
              </div>
            </div>
          </div>
        </div>
        {/* exemplo a ser copiado em edicoes posteriores

          <div class="prof col-lg">
              <div style="display: flex; flex-direction: column;">
                  <button class="btn btn-info btn-collapsed" type="button"
                          data-toggle="collapse" data-target="#irene-data">
                      Irene
                  </button>
                  <div id="irene-data" class="prof-data collapse">
                      <div class="card materia">
                      Cálculo II
                  </div>
                  <div class="card provas">
                      <h3>PROVAS</h3>
                      ??
                  </div>
                  <div class="card sistemas">
                      <h3>SISTEMAS UTILIZADOS</h3>
                      <a rel="noopener noreferrer" href="" target="_blank">?</a>
                      <a rel="noopener noreferrer" href="" target="_blank">?</a>
                  </div>
                  <div class="card atendimento">
                      <h3>MONITORIA/ATENDIMENTO</h3>
                      ??
                  </div>
                  <div class="card email">
                      <h3>CONTATO</h3>
                      onnis@icmc.usp.br
                  </div>
                  <div class="card ementa">
                      <a rel="noopener noreferrer" href="" target="_blank">Bibliografia/Ementa</a>
                  </div>
                  <div class="card avaliacao">
                      <h3>CRITÉRIOS DE AVALIAÇÃO</h3>
                      ??
                  </div>
                  <div class="card listas">
                      <h3>LISTAS</h3>
                      Vazio
                  </div>
                  <div class="card arquivos">
                      <h3>ARQUIVOS</h3>
                      Vazio
                  </div>
                  </div>
              </div>
          </div>

  	*/}
        <div className="prof col-lg ">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-info btn-collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#links"
            >
              Links Úteis
            </button>
            <div id="links" className="prof-data collapse">
              <div className="yellowbox">
                <a rel="noopener noreferrer"
                  href="https://drive.google.com/open?id=1-Edxrw-_wahUobJGMTd41qJSAVzHivREWApYVkPZm64"
                  target="_blank"
                >
                  Calendário Escolar
                </a>
                <br />
              </div>
              <div className="yellowbox">
                <a rel="noopener noreferrer"
                  href="https://calendar.google.com/calendar/b/1?cid=dXNwLmJyX21hdnBscTJjZDAydjV2NmNhcmR2cWNncW4wQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  target="_blank"
                >
                  Calendário de Provas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage
