---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 107.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 3.6, z: -1.12, r: 33.2, estimated: true }  # 코딩
  agentic: { s: 3.3, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 37.0, z: -1.75, r: 23.8, estimated: false }  # 멀티모달
  long_context: { s: 14.2, z: -1.14, r: 32.9, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · 107.0 t/s · TTFT 1.05s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 추정 | (추정) |
| 에이전트 | 34.1 | -1.06 | 실측 | [[gdpval]] 15.0%×1.0, [[tau3-banking]] 3.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.8 | -1.75 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 32.9 | -1.14 | 추정 | (추정) |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
