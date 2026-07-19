---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.43
output_speed_tps: 171.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.9, z: 2.19, r: 82.8, estimated: false }  # 전문 지식
  reasoning: { s: 62.9, z: 1.54, r: 73.1, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.27, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 63.3, z: 1.05, r: 65.7, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.92, r: 36.2, estimated: false }  # 신뢰성
  multimodal: { s: 94.2, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.67, r: 75.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.43/1M · 171.0 t/s · TTFT 6.74s · 1M ctx` · 가성비 88.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.8 | +2.19 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 73.1 | +1.54 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 69.0 | +1.27 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 65.7 | +1.05 | 실측 | [[apex-agents]] 28.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 75.1 | +1.67 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
