import React from 'react'

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png" alt="imagen" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://www.debate.com.mx/__export/1571691199360/sites/debate/img/2019/10/21/belinda_luce_nuevo_rostrox_sus_fans_dicen_que_algo_se_operx_.jpg_423682103.jpg" alt="Beli" />
                </div>
              </div>
              <span className="small">Belinda</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team">$ 20USD</a>
          </div>
        </div>
      </article>
)

export default Curso