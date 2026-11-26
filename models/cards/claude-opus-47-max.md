---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 80.9866590376546
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.1, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 61.4, z: 1.31, r: 69.6, estimated: false }  # 추론
  coding: { s: 78.2, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.8, z: 0.74, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 65.3, z: 0.62, r: 59.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 80.9866590376546 t/s · TTFT 13.5678661133268s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[gpqa-diamond]] 91.4141%×0.4, [[humanitys-last-exam]] 42.3077%×0.3 |
| 추론 | 69.6 | +1.31 | 실측 | [[critpt]] 12%×1.0, [[gpqa-diamond]] 91.4141%×1.0, [[humanitys-last-exam]] 42.3077%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[terminal-bench]] 51.5152%×0.5 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 1361.02 Elo×1.0, [[tau2-bench]] 88.5965%×1.0, [[tau3-banking]] 34.6392%×1.0, [[terminal-bench]] 51.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.0 | +0.74 | 실측 | [[mmmu-pro]] 78.8439%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 78.6667%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 실측 | [[ifbench]] 58.6395%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
