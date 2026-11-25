---
type: Model
title: Claude Sonnet 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 58.5000071846954
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.4, z: 1.15, r: 67.2, estimated: false }  # 전문 지식
  reasoning: { s: 47.7, z: 0.62, r: 59.3, estimated: false }  # 추론
  coding: { s: 74.2, z: 1.12, r: 66.8, estimated: false }  # 코딩
  agentic: { s: 74.0, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 62.5, z: 0.5, r: 57.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Sonnet 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 58.5000071846954 t/s · TTFT 137.016882314031s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.2 | +1.15 | 실측 | [[gpqa-diamond]] 87.4747%×0.4, [[humanitys-last-exam]] 33.5959%×0.3 |
| 추론 | 59.3 | +0.62 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 87.4747%×1.0, [[humanitys-last-exam]] 33.5959%×1.0 |
| 코딩 | 66.8 | +1.12 | 실측 | [[scicode]] 50.1157%×1.0, [[terminal-bench]] 53.0303%×0.5 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[gdpval]] 1240.03 Elo×1.0, [[tau2-bench]] 75.731%×1.0, [[tau3-banking]] 34.433%×1.0, [[terminal-bench]] 53.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 73.2948%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | 57.5 | +0.5 | 실측 | [[ifbench]] 56.5986%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
