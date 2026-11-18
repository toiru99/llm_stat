---
type: Model
title: GLM-4.7-Flash
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.061
output_speed_tps: 96.6798039518912
context_window: 200000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.7, z: -0.56, r: 41.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.75, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.2, r: 47.1, estimated: false }  # 긴문맥
  instruction: { s: 68.4, z: 0.61, r: 59.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GLM-4.7-Flash

Z AI · Open · Small · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.061/1M · 96.6798039518912 t/s · TTFT 2.123518305147168s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.6 | -0.56 | 실측 | [[gpqa-diamond]] 58.0808080808081%×0.4, [[humanitys-last-exam]] 7.5996292863762696%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 58.0808080808081%×1.0, [[humanitys-last-exam]] 7.5996292863762696%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[terminal-bench]] 21.969696969697%×0.5 |
| 에이전트 | 61.2 | +0.75 | 실측 | [[tau2-bench]] 98.8304093567251%×1.0, [[terminal-bench]] 21.969696969697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.1 | -0.2 | 실측 | [[aa-lcr]] 41.6666666666667%×1.0 |
| 지시 따르기 | 59.1 | +0.61 | 실측 | [[ifbench]] 60.816326530612194%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
