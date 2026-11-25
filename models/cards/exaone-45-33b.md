---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: 34.4
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.5, z: -0.13, r: 48.0, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.08, r: 51.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.5, z: -0.05, r: 49.3, estimated: false }  # 멀티모달
  long_context: { s: 61.7, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 64.4, z: 0.58, r: 58.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Small(34.4B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[gpqa-diamond]] 79.3939%×0.4, [[humanitys-last-exam]] 12.8823%×0.3 |
| 추론 | 48.0 | -0.13 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 79.3939%×1.0, [[humanitys-last-exam]] 12.8823%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[terminal-bench]] 20.4545%×0.5 |
| 에이전트 | 51.3 | +0.08 | 실측 | [[gdpval]] 474.1 Elo×1.0, [[tau2-bench]] 78.0702%×1.0, [[terminal-bench]] 20.4545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.3 | -0.05 | 실측 | [[mmmu-pro]] 67.341%×1.0 |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 54.6667%×1.0 |
| 지시 따르기 | 58.7 | +0.58 | 실측 | [[ifbench]] 57.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
