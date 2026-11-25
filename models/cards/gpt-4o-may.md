---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 6
output_speed_tps: 92.7234628218952
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.49, r: 42.6, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: —

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 92.7234628218952 t/s · TTFT 1.7267581884521s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 52.6263%×0.4, [[humanitys-last-exam]] 1.76%×0.3 |
| 추론 | 42.6 | -0.49 | 실측 | [[gpqa-diamond]] 52.6263%×1.0, [[humanitys-last-exam]] 1.76%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
