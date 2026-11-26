---
type: Model
title: Claude Sonnet 5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 95.0592623824284
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 50.9, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.6, z: 0.26, r: 54.0, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Sonnet 5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 95.0592623824284 t/s · TTFT 1.38923363641667s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[gpqa-diamond]] 80%×0.4, [[humanitys-last-exam]] 19.0454%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 80%×1.0, [[humanitys-last-exam]] 19.0454%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 52.0 | +0.13 | 실측 | [[gdpval]] 1219.45 Elo×1.0, [[tau3-banking]] 15.6701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.0 | +0.26 | 실측 | [[mmmu-pro]] 71.9075%×1.0 |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
