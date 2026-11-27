---
type: Model
title: Grok Code Fast 1
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.7, z: -0.05, r: 49.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.38, r: 44.2, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 51.4, z: 0.15, r: 52.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.8, z: 0.06, r: 51.0, estimated: false }  # 긴문맥
  instruction: { s: 41.1, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Code Fast 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok Code Fast 1

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.05 | 실측 | [[gpqa-diamond]] 72.7273%×0.4, [[humanitys-last-exam]] 8.01668%×0.3 |
| 추론 | 44.2 | -0.38 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.7273%×1.0, [[humanitys-last-exam]] 8.01668%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 52.2 | +0.15 | 실측 | [[tau2-bench]] 75.731%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.0 | +0.06 | 실측 | [[aa-lcr]] 53%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 41.3605%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
