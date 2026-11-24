---
type: Model
title: Solar Open 100B
creator: Upstage
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: 102
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: -0.21, r: 46.8, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 26.1, z: -0.74, r: 38.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.35, r: 44.7, estimated: false }  # 긴문맥
  instruction: { s: 64.0, z: 0.56, r: 58.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open 100B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Solar Open 100B

Upstage · Open · Medium(102B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.8 | -0.21 | 실측 | [[gpqa-diamond]] 65.6566%×0.4, [[humanitys-last-exam]] 10.4263%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.6566%×1.0, [[humanitys-last-exam]] 10.4263%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 38.9 | -0.74 | 실측 | [[tau2-bench]] 48.2456%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.7 | -0.35 | 실측 | [[aa-lcr]] 41%×1.0 |
| 지시 따르기 | 58.5 | +0.56 | 실측 | [[ifbench]] 57.6871%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
