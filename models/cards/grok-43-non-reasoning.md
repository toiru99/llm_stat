---
type: Model
title: Grok 4.3 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 79.5662448930713
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.31, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 45.1, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 42.5, z: -0.16, r: 47.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.22, r: 46.7, estimated: false }  # 멀티모달
  long_context: { s: 36.5, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 49.9, z: -0.02, r: 49.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Grok 4.3 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 79.5662448930713 t/s · TTFT 1.25220254673891s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.31 | 실측 | [[gpqa-diamond]] 65.7576%×0.4, [[humanitys-last-exam]] 6.76552%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.7576%×1.0, [[humanitys-last-exam]] 6.76552%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[scicode]] 39.3519%×1.0, [[terminal-bench]] 18.9394%×0.5 |
| 에이전트 | 47.6 | -0.16 | 실측 | [[gdpval]] 948.5 Elo×1.0, [[tau2-bench]] 65.7895%×1.0, [[tau3-banking]] 8.04124%×1.0, [[terminal-bench]] 18.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.7 | -0.22 | 실측 | [[mmmu-pro]] 64.7977%×1.0 |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 32.3333%×1.0 |
| 지시 따르기 | 49.6 | -0.02 | 실측 | [[ifbench]] 47.619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
