---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.1425
output_speed_tps: 91.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.6, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 22.2, z: -0.62, r: 40.7, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.39, r: 44.2, estimated: false }  # 코딩
  agentic: { s: 2.9, z: -1.33, r: 30.1, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.01, r: 49.8, estimated: true }  # 신뢰성
  multimodal: { s: 38.6, z: -1.59, r: 26.2, estimated: false }  # 멀티모달
  long_context: { s: 13.5, z: -1.1, r: 33.5, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.07, r: 33.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · 91.0 t/s · TTFT 0.89s · 128k ctx` · 가성비 49.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.2 | -0.39 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 30.1 | -1.33 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 3.0%×1.0 |
| 신뢰성 | 49.8 | -0.01 | 추정 | (추정) |
| 멀티모달 | 26.2 | -1.59 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 33.5 | -1.1 | 추정 | (추정) |
| 지시 따르기 | 33.9 | -1.07 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
