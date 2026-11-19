---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 111.205499187752
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.6, z: 1.7, r: 75.6, estimated: false }  # 전문 지식
  reasoning: { s: 70.0, z: 1.7, r: 75.4, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.8, r: 62.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.6, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 91.3, z: 1.57, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 111.205499187752 t/s · TTFT 15.040272655225s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.6 | +1.7 | 실측 | [[gpqa-diamond]] 94.1414141414141%×0.4, [[humanitys-last-exam]] 47.0342910101946%×0.3 |
| 추론 | 75.4 | +1.7 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[gpqa-diamond]] 94.1414141414141%×1.0, [[humanitys-last-exam]] 47.0342910101946%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 58.6805555555556%×1.0, [[terminal-bench]] 53.787878787878796%×0.5 |
| 에이전트 | 62.1 | +0.8 | 실측 | [[gdpval]] 798.52%×1.0, [[tau2-bench]] 95.6140350877193%×1.0, [[tau3-banking]] 21.4432989690722%×1.0, [[terminal-bench]] 53.787878787878796%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.4277456647399%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 73.5 | +1.57 | 실측 | [[ifbench]] 77.1428571428571%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
