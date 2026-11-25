---
type: Model
title: Ring-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 61.7, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Ring-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 77.3737%×0.4, [[humanitys-last-exam]] 11.1214%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 77.3737%×1.0, [[humanitys-last-exam]] 11.1214%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[tau2-bench]] 26.3158%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 54.6667%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 44.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
