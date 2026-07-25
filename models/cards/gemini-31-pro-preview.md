---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: None
output_speed_tps: 117.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.4, z: 2.37, r: 85.5, estimated: false }  # 전문 지식
  reasoning: { s: 80.3, z: 2.31, r: 84.6, estimated: false }  # 추론
  coding: { s: 92.8, z: 1.92, r: 78.8, estimated: false }  # 코딩
  agentic: { s: 63.5, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.33, r: 69.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.16, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.38, r: 70.7, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.59, r: 73.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $None/1M · 117.0 t/s · TTFT 26.67s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.5 | +2.37 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 84.6 | +2.31 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 78.8 | +1.92 | 실측 | [[scicode]] 59.0%×1.0, [[terminal-bench]] 54.0%×0.5 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[apex-agents]] 32.0%×1.0, [[gdpval]] 23.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 54.0%×1.0 |
| 신뢰성 | 69.9 | +1.33 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 67.5 | +1.16 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.7 | +1.38 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 73.8 | +1.59 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
