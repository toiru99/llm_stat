---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: 6
output_speed_tps: 92.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.56, r: 41.6, estimated: false }  # 전문 지식
  reasoning: { s: 25.9, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 13.3, z: -0.66, r: 40.2, estimated: true }  # 코딩
  agentic: { s: 26.7, z: -0.41, r: 43.8, estimated: true }  # 에이전트
  trust: { s: 18.1, z: -0.3, r: 45.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.3, z: -0.24, r: 46.4, estimated: true }  # 긴문맥
  instruction: { s: 42.5, z: -0.42, r: 43.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 92.0 t/s · TTFT 1.55s · 128k ctx` · 가성비 0.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.6 | -0.56 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 40.2 | -0.66 | 추정 | (추정) |
| 에이전트 | 43.8 | -0.41 | 추정 | (추정) |
| 신뢰성 | 45.5 | -0.3 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.4 | -0.24 | 추정 | (추정) |
| 지시 따르기 | 43.7 | -0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
