---
type: Model
title: DeepSeek V3.2 Exp (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1176
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 47.0, z: 0.01, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.7, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 36.1, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.4, z: -0.22, r: 46.6, estimated: false }  # 긴문맥
  instruction: { s: 43.6, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# DeepSeek V3.2 Exp (non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1176/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 실측 | [[gpqa-diamond]] 73.8384%×0.4, [[humanitys-last-exam]] 9.03614%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 73.8384%×1.0, [[humanitys-last-exam]] 9.03614%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 25%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[tau2-bench]] 33.9181%×1.0, [[terminal-bench]] 25%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.6 | -0.22 | 실측 | [[aa-lcr]] 44.6667%×1.0 |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 43.1293%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
