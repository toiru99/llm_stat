---
type: Model
title: Grok 4.3 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 75.9900066058539
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.33, r: 70.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.9, z: 0.98, r: 64.7, estimated: false }  # 추론
  coding: { s: 64.5, z: 0.79, r: 61.9, estimated: false }  # 코딩
  agentic: { s: 59.8, z: 0.45, r: 56.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.8, z: 0.68, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 97.1, z: 1.94, r: 79.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Grok 4.3 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 75.9900066058539 t/s · TTFT 16.2614793678565s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.0 | +1.33 | 실측 | [[gpqa-diamond]] 90.101%×0.4, [[humanitys-last-exam]] 37.2104%×0.3 |
| 추론 | 64.7 | +0.98 | 실측 | [[critpt]] 8%×1.0, [[gpqa-diamond]] 90.101%×1.0, [[humanitys-last-exam]] 37.2104%×1.0 |
| 코딩 | 61.9 | +0.79 | 실측 | [[scicode]] 48.2639%×1.0, [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 56.7 | +0.45 | 실측 | [[gdpval]] 945.52 Elo×1.0, [[tau2-bench]] 97.6608%×1.0, [[tau3-banking]] 12.3711%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.3 | +0.68 | 실측 | [[mmmu-pro]] 78.0925%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 73%×1.0 |
| 지시 따르기 | 79.1 | +1.94 | 실측 | [[ifbench]] 81.2925%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
