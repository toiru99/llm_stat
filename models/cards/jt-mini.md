---
type: Model
title: JT-MINI
creator: China Mobile
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.3, z: -0.26, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.7, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 60.7, z: 0.48, r: 57.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.7, z: -1.32, r: 30.2, estimated: false }  # 긴문맥
  instruction: { s: 34.5, z: -0.66, r: 40.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-MINI
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# JT-MINI

China Mobile · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.26 | 실측 | [[gpqa-diamond]] 67.5758%×0.4, [[humanitys-last-exam]] 6.44115%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.5758%×1.0, [[humanitys-last-exam]] 6.44115%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 57.1 | +0.48 | 실측 | [[tau2-bench]] 92.9825%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.2 | -1.32 | 실측 | [[aa-lcr]] 13%×1.0 |
| 지시 따르기 | 40.0 | -0.66 | 실측 | [[ifbench]] 36.6667%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
