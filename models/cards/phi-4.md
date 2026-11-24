---
type: Model
title: Phi-4
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1625
output_speed_tps: 37.4092874294855
context_window: 16000
status: current
size_class: Small
params_b: 14
is_reasoning: false
radar:
  knowledge: { s: 33.1, z: -0.67, r: 40.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 2.9, z: -1.56, r: 26.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 16.0, z: -1.43, r: 28.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Phi-4

Microsoft · Open · Small(14B) · 컨텍스트 16k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.125 · 출력 $0.5 · 혼합 $0.1625/1M · 37.4092874294855 t/s · TTFT 1.87985827616667s · 16k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.0 | -0.67 | 실측 | [[gpqa-diamond]] 57.4747%×0.4, [[humanitys-last-exam]] 3.76%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 57.4747%×1.0, [[humanitys-last-exam]] 3.76%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 26.6 | -1.56 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 28.6 | -1.43 | 실측 | [[ifbench]] 23.5374%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
