---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.1, z: -0.28, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.3, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.4, z: 0.24, r: 53.5, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.06, r: 49.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.28 | 실측 | [[gpqa-diamond]] 69.2929%×0.4, [[humanitys-last-exam]] 4.12%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.2929%×1.0, [[humanitys-last-exam]] 4.12%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 42.7 | -0.49 | 실측 | [[tau2-bench]] 48.8304%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.5 | +0.24 | 실측 | [[aa-lcr]] 58%×1.0 |
| 지시 따르기 | 49.0 | -0.06 | 실측 | [[ifbench]] 46.9388%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
