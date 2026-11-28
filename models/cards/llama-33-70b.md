---
type: Model
title: Llama 3.3 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.656
output_speed_tps: 64.18014191529795
context_window: 128000
status: current
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.92, r: 36.2, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.92, r: 36.1, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -1.17, r: 32.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.7, z: -1.23, r: 31.6, estimated: false }  # 긴문맥
  instruction: { s: 49.1, z: -0.06, r: 49.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Llama 3.3 70B

Meta · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.6499999999999999 · 출력 $0.71 · 혼합 $0.656/1M · 64.18014191529795 t/s · TTFT 2.306842958489415s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 49.798%×0.4, [[humanitys-last-exam]] 3.56%×0.3 |
| 추론 | 36.1 | -0.92 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 49.798%×1.0, [[humanitys-last-exam]] 3.56%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 32.4 | -1.17 | 실측 | [[gdpval]] -166.76 Elo×1.0, [[tau2-bench]] 26.6082%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.6 | -1.23 | 실측 | [[aa-lcr]] 15.6667%×1.0 |
| 지시 따르기 | 49.2 | -0.06 | 실측 | [[ifbench]] 47.0748%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
