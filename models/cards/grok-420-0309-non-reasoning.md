---
type: Model
title: Grok 4.20 0309 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.14
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.1, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 37.2, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.1, z: -0.27, r: 45.9, estimated: false }  # 멀티모달
  long_context: { s: 28.6, z: -0.89, r: 36.6, estimated: false }  # 긴문맥
  instruction: { s: 50.1, z: -0.01, r: 49.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Grok 4.20 0309 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.14/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[gpqa-diamond]] 78.4848%×0.4, [[humanitys-last-exam]] 24.5134%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 78.4848%×1.0, [[humanitys-last-exam]] 24.5134%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[terminal-bench]] 21.9697%×0.5 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[tau2-bench]] 69.5906%×1.0, [[terminal-bench]] 21.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.9 | -0.27 | 실측 | [[mmmu-pro]] 64.0462%×1.0 |
| 긴문맥 | 36.6 | -0.89 | 실측 | [[aa-lcr]] 25.3333%×1.0 |
| 지시 따르기 | 49.8 | -0.01 | 실측 | [[ifbench]] 47.8231%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
