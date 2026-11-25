---
type: Model
title: Gemma 3n E2B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 6
is_reasoning: false
radar:
  knowledge: { s: 10.5, z: -1.76, r: 23.5, estimated: false }  # 전문 지식
  reasoning: { s: 6.5, z: -1.43, r: 28.6, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 0.6, z: -1.64, r: 25.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 13.9, z: -1.52, r: 27.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemma 3n E2B

Google · Open · Small(6B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 23.5 | -1.76 | 실측 | [[gpqa-diamond]] 22.9293%×0.4, [[humanitys-last-exam]] 4.17053%×0.3 |
| 추론 | 28.6 | -1.43 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 22.9293%×1.0, [[humanitys-last-exam]] 4.17053%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 25.4 | -1.64 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 27.2 | -1.52 | 실측 | [[ifbench]] 22.0408%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
