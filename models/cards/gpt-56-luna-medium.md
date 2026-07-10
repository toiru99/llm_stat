---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.87
output_speed_tps: 196.0
context_window: 1000000
radar:
  knowledge: { s: 67.3, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.05, r: 50.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 53.7, z: -0.03, r: 49.6, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 81.2, z: 0.53, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 196.0 t/s · TTFT 1.8s · 1M ctx` · 가성비 43.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 50.8 | +0.05 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 49.6 | -0.03 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 15.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
