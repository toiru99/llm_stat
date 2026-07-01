---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 4.35
output_speed_tps: 68.0
context_window: 922000
radar:
  knowledge: { s: 65.9, z: 0.63, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 78.1, z: 0.78, r: 61.7, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.21, r: 53.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.16, r: 52.4, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.87, r: 36.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 68.0 t/s · TTFT 1.05s · 922k ctx` · 가성비 8.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 61.7 | +0.78 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 53.2 | +0.21 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 52.4 | +0.16 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 36.9 | -0.87 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
