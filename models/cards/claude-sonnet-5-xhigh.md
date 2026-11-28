---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 102.26397688442
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 47.5, z: 0.61, r: 59.2, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 77.9, z: 1.08, r: 66.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 102.26397688442 t/s · TTFT 16.7717425020583s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[humanitys-last-exam]] 39.0176%×0.3 |
| 추론 | 59.2 | +0.61 | 실측 | [[critpt]] 15.4286%×1.0, [[humanitys-last-exam]] 39.0176%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 54.0509%×1.0 |
| 에이전트 | 66.2 | +1.08 | 실측 | [[gdpval]] 1364.99 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 76.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
