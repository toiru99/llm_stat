---
type: Model
title: Qwen3.6 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 50.9333039264607
context_window: 262144
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 56.5, z: 0.47, r: 57.1, estimated: false }  # 전문 지식
  reasoning: { s: 35.4, z: 0.01, r: 50.2, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 51.2, z: 0.14, r: 52.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.3, z: 0.25, r: 53.8, estimated: false }  # 멀티모달
  long_context: { s: 75.2, z: 0.53, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 47.2, z: -0.14, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.6 27B (non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 50.9333039264607 t/s · TTFT 7.26468054572774s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.1 | +0.47 | 실측 | [[gpqa-diamond]] 82.9293%×0.4, [[humanitys-last-exam]] 15.0602%×0.3 |
| 추론 | 50.2 | +0.01 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 82.9293%×1.0, [[humanitys-last-exam]] 15.0602%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[terminal-bench]] 21.2121%×0.5 |
| 에이전트 | 52.2 | +0.14 | 실측 | [[gdpval]] 969.16 Elo×1.0, [[tau2-bench]] 93.5673%×1.0, [[tau3-banking]] 9.27835%×1.0, [[terminal-bench]] 21.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.8 | +0.25 | 실측 | [[mmmu-pro]] 71.7341%×1.0 |
| 긴문맥 | 58.0 | +0.53 | 실측 | [[aa-lcr]] 66.6667%×1.0 |
| 지시 따르기 | 48.0 | -0.14 | 실측 | [[ifbench]] 45.7143%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
