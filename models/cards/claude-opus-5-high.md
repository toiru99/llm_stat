---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 72.9854798488534
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.8, z: 1.9, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 82.3, z: 2.34, r: 85.2, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 87.8, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.6, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 72.9854798488534 t/s · TTFT 12.8878577091s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.9 | 실측 | [[gpqa-diamond]] 93.7374%×0.4, [[humanitys-last-exam]] 52.8267%×0.3 |
| 추론 | 85.2 | +2.34 | 실측 | [[critpt]] 28.2857%×1.0, [[gpqa-diamond]] 93.7374%×1.0, [[humanitys-last-exam]] 52.8267%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[scicode]] 55.4398%×1.0 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[gdpval]] 1604.11 Elo×1.0, [[tau3-banking]] 44.7423%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.4277%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 79%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
