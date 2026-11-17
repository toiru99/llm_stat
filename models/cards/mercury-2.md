---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 326.34981740595646
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.8, z: 0.32, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.07, r: 49.0, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 42.4, z: -0.08, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.12, r: 48.2, estimated: false }  # 긴문맥
  instruction: { s: 81.0, z: 1.14, r: 67.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 326.34981740595646 t/s · TTFT 6.516193127916659s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.32 | 실측 | [[gpqa-diamond]] 76.969696969697%×0.4, [[humanitys-last-exam]] 17.1455050973123%×0.3 |
| 추론 | 49.0 | -0.07 | 실측 | [[critpt]] 0.8489795918367351%×1.0, [[gpqa-diamond]] 76.969696969697%×1.0, [[humanitys-last-exam]] 17.1455050973123%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[scicode]] 37.7314814814815%×1.0, [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 48.9 | -0.08 | 실측 | [[gdpval]] 501.37%×1.0, [[tau2-bench]] 70.7602339181287%×1.0, [[tau3-banking]] 9.48453608247423%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.2 | -0.12 | 실측 | [[aa-lcr]] 43.6666666666667%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 실측 | [[ifbench]] 69.7959183673469%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
