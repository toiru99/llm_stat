---
type: Model
title: Llama 3.1 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.81
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.5, z: -1.07, r: 33.9, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 10.0, z: -1.31, r: 30.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 31.3, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Llama 3.1 70B

Meta · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.81 · 출력 $0.81 · 혼합 $0.81/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[gpqa-diamond]] 40.9091%×0.4, [[humanitys-last-exam]] 4.47%×0.3 |
| 추론 | 33.9 | -1.07 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 40.9091%×1.0, [[humanitys-last-exam]] 4.47%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 30.4 | -1.31 | 실측 | [[tau2-bench]] 15.2047%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 34.4218%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
