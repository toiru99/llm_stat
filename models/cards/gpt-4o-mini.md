---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 60.2152622712035
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -1.27, r: 31.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.0, z: -1.81, r: 22.9, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 26.5, z: -1.0, r: 35.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · 60.2152622712035 t/s · TTFT 1.68110634589999s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[gpqa-diamond]] 42.6263%×0.4, [[humanitys-last-exam]] 4.2%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 42.6263%×1.0, [[humanitys-last-exam]] 4.2%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 31.0 | -1.27 | 실측 | [[gdpval]] -15.55 Elo×1.0, [[tau3-banking]] 2.8866%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 22.9 | -1.81 | 실측 | [[mmmu-pro]] 41.5029%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 35.0 | -1.0 | 실측 | [[ifbench]] 30.9524%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
