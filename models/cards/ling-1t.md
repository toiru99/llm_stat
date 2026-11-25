---
type: Model
title: Ling-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 44.7, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 24.6, z: -0.79, r: 38.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.4, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 31.8, z: -0.77, r: 38.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Ling-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 71.9192%×0.4, [[humanitys-last-exam]] 7.32159%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 71.9192%×1.0, [[humanitys-last-exam]] 7.32159%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 38.1 | -0.79 | 실측 | [[tau2-bench]] 32.7485%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 36.6667%×1.0 |
| 지시 따르기 | 38.4 | -0.77 | 실측 | [[ifbench]] 34.7619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
