---
type: Model
title: DeepSeek V3.2 Exp
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1176
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 54.3, z: 0.36, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.03, r: 49.6, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 40.7, z: -0.23, r: 46.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.73, r: 61.0, estimated: false }  # 긴문맥
  instruction: { s: 59.0, z: 0.36, r: 55.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek V3.2 Exp

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1176/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.36 | 실측 | [[gpqa-diamond]] 79.697%×0.4, [[humanitys-last-exam]] 14.8749%×0.3 |
| 추론 | 49.6 | -0.03 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 79.697%×1.0, [[humanitys-last-exam]] 14.8749%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[terminal-bench]] 31.0606%×0.5 |
| 에이전트 | 46.6 | -0.23 | 실측 | [[tau2-bench]] 33.9181%×1.0, [[terminal-bench]] 31.0606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.0 | +0.73 | 실측 | [[aa-lcr]] 72.3333%×1.0 |
| 지시 따르기 | 55.4 | +0.36 | 실측 | [[ifbench]] 54.1497%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
