---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 1.74
output_speed_tps: 108.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.9, z: 2.22, r: 83.3, estimated: false }  # 전문 지식
  reasoning: { s: 80.1, z: 2.18, r: 82.7, estimated: false }  # 추론
  coding: { s: 92.8, z: 1.82, r: 77.3, estimated: false }  # 코딩
  agentic: { s: 62.4, z: 1.0, r: 65.0, estimated: false }  # 에이전트
  trust: { s: 54.7, z: 1.2, r: 68.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.35, r: 70.2, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 108.0 t/s · TTFT 32.87s · 1M ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.3 | +2.22 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 82.7 | +2.18 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 77.3 | +1.82 | 실측 | [[scicode]] 59.0%×1.0, [[terminal-bench]] 54.0%×0.5 |
| 에이전트 | 65.0 | +1.0 | 실측 | [[apex-agents]] 32.0%×1.0, [[gdpval]] 23.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 54.0%×1.0 |
| 신뢰성 | 68.0 | +1.2 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.2 | +1.35 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
