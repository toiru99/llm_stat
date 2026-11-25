---
type: Model
title: Gemma 3 1B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 11.7, z: -1.7, r: 24.4, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.38, r: 29.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 5.3, z: -1.47, r: 27.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 11.0, z: -1.64, r: 25.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemma 3 1B

Google · Open · Tiny(1B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 24.4 | -1.7 | 실측 | [[gpqa-diamond]] 23.7374%×0.4, [[humanitys-last-exam]] 5.32901%×0.3 |
| 추론 | 29.2 | -1.38 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 23.7374%×1.0, [[humanitys-last-exam]] 5.32901%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 27.9 | -1.47 | 실측 | [[tau2-bench]] 10.5263%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 25.4 | -1.64 | 실측 | [[ifbench]] 19.932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
