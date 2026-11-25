---
type: Model
title: DeepSeek V3.2 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.294
output_speed_tps: 33.3591545779379
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 49.1, z: 0.11, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 64.5, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.5, z: -0.19, r: 47.2, estimated: false }  # 긴문맥
  instruction: { s: 51.9, z: 0.06, r: 50.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek V3.2 (non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.294/1M · 33.3591545779379 t/s · TTFT 3.299615413222205s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.11 | 실측 | [[gpqa-diamond]] 75.0505%×0.4, [[humanitys-last-exam]] 11.2141%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 75.0505%×1.0, [[humanitys-last-exam]] 11.2141%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 32.5758%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[tau2-bench]] 78.9474%×1.0, [[terminal-bench]] 32.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.2 | -0.19 | 실측 | [[aa-lcr]] 45.6667%×1.0 |
| 지시 따르기 | 50.9 | +0.06 | 실측 | [[ifbench]] 49.0476%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
