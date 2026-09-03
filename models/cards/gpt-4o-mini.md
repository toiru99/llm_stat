---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.1425
output_speed_tps: 121.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.4, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 22.0, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 37.1, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 2.9, z: -1.34, r: 29.9, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.04, r: 49.3, estimated: true }  # 신뢰성
  multimodal: { s: 38.0, z: -1.6, r: 26.0, estimated: false }  # 멀티모달
  long_context: { s: 13.5, z: -1.12, r: 33.2, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.09, r: 33.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · 121.0 t/s · TTFT 0.83s · 128k ctx` · 가성비 49.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.5 | -0.63 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 29.9 | -1.34 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 3.0%×1.0 |
| 신뢰성 | 49.3 | -0.04 | 추정 | (추정) |
| 멀티모달 | 26.0 | -1.6 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 33.2 | -1.12 | 추정 | (추정) |
| 지시 따르기 | 33.6 | -1.09 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
