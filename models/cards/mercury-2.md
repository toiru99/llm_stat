---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 338.493796643902
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.8, z: 0.31, r: 54.7, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 42.4, z: -0.09, r: 48.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.13, r: 48.0, estimated: false }  # 긴문맥
  instruction: { s: 81.0, z: 1.13, r: 67.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 338.493796643902 t/s · TTFT 3.65550721514442s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.7 | +0.31 | 실측 | [[gpqa-diamond]] 76.969696969697%×0.4, [[humanitys-last-exam]] 17.1455050973123%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 0.8489795918367351%×1.0, [[gpqa-diamond]] 76.969696969697%×1.0, [[humanitys-last-exam]] 17.1455050973123%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[scicode]] 37.7314814814815%×1.0, [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 48.7 | -0.09 | 실측 | [[gdpval]] 501.37%×1.0, [[tau2-bench]] 70.7602339181287%×1.0, [[tau3-banking]] 9.48453608247423%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.0 | -0.13 | 실측 | [[aa-lcr]] 43.6666666666667%×1.0 |
| 지시 따르기 | 67.0 | +1.13 | 실측 | [[ifbench]] 69.7959183673469%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
